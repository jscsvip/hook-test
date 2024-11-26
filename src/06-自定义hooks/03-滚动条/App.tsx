import React, { useCallback } from 'react';
import useScroll from './useScroll';

export default function ScrollTop() {
  const { y } = useScroll();

  const goTop = useCallback(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  const style = {
    position: "fixed" as React.CSSProperties['position'],
    right: "10px" as React.CSSProperties['right'],
    bottom: "10px"as React.CSSProperties['bottom'],
  };
  // 当滚动条位置纵向超过 300 时，显示返回顶部按钮
  if (y > 300) {
    return (
      <button onClick={goTop} style={style}>
        Back to Top
      </button>
    );
  }
  // 否则不 render 任何 UI
  return <>1111</>;
}
