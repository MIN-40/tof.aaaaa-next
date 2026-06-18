#!/usr/bin/env bash
set -euo pipefail

BUCKET="tof-aaaaa-site-min40"
DISTRIBUTION_ID="ERA5HONMA4UXE"
REGION="ap-southeast-2"

if ! command -v aws >/dev/null 2>&1; then
  echo "AWS CLI가 설치되어 있지 않습니다."
  echo "설치 후 다시 실행하세요: brew install awscli"
  exit 1
fi

if ! aws sts get-caller-identity >/dev/null 2>&1; then
  echo "AWS CLI 로그인이 필요합니다."
  echo "먼저 실행하세요: aws configure"
  exit 1
fi

echo "1/3 Next.js 정적 빌드 생성 중..."
rm -rf .next out
NEXT_TELEMETRY_DISABLED=1 npm run build

echo "2/3 S3 업로드 중: s3://${BUCKET}"
aws s3 sync out "s3://${BUCKET}" --delete --region "${REGION}"

echo "3/3 CloudFront 캐시 무효화 중: ${DISTRIBUTION_ID}"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "${DISTRIBUTION_ID}" \
  --paths "/*" \
  --query 'Invalidation.Id' \
  --output text)

echo "배포 요청 완료: ${INVALIDATION_ID}"
echo "확인 주소: https://dj06r90isjovg.cloudfront.net/?v=$(date +%s)"
