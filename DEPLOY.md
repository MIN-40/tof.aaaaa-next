# tof.aaaaa 수동 자동 배포

앞으로 수정 후 아래 명령어 한 번으로 배포합니다.

```bash
cd /Users/mn_h02/project/a/tof-aaaaa-next
npm run deploy
```

이 명령은 자동으로 다음을 실행합니다.

1. `.next`, `out` 삭제
2. `npm run build`
3. `out` 폴더를 S3 `tof-aaaaa-site-min40`에 동기화
4. CloudFront `ERA5HONMA4UXE` 캐시 무효화

## 최초 1회 준비

AWS CLI가 없으면 설치합니다.

```bash
brew install awscli
```

그 다음 AWS 키를 등록합니다.

```bash
aws configure
```

입력값:

```text
AWS Access Key ID: 본인 키
AWS Secret Access Key: 본인 시크릿 키
Default region name: ap-southeast-2
Default output format: json
```

## 확인 주소

```text
https://dj06r90isjovg.cloudfront.net/?v=확인용숫자
```
