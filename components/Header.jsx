import Link from 'next/link';

export default function Header({ qty, onCategoryChange, onLanguageChange }) {
  return (
    <>
      <div className="topline">tof.aaaaa official online store</div>
      <header>
        <nav className="nav wrap">
          <div className="left">
            <a onClick={() => onCategoryChange('new')}>New</a>
            <a onClick={() => onCategoryChange('all')}>Acc</a>
            <a href="#guide">Guide</a>
          </div>
          <a className="brand">tof<span>.aaaaa</span></a>
          <div className="right">
            <Link href="/cart">Cart ({qty})</Link>
            <button onClick={() => onLanguageChange('kr')}>KR</button>
            <button onClick={() => onLanguageChange('en')}>EN</button>
          </div>
        </nav>
      </header>
    </>
  );
}
