# React + Vite useEffect

use Effect
- 컴포넌트의 라이프사이클에 간섭할 수 있도록 하게 해주는 Hook
- Mount, Update, Unmount 시 호출 가능
<br/>
<br/>
마운트 : 탄생
####  useEffect(()=>{
####    // 컴포넌트가 마운트 될때 실행
####  }, []); 
<br/>
<br/>
업데이트 : 변화, 리렌더링
####  useEffect(()=>{
####    // 컴포넌트가 리렌더링 될때마다 실행
####  });
<br/>
<br/>
언마운트 : 컴포넌
####  useEffect(()=>{
####    // 컴포넌트가 사라질때 실행
####    return () => {
####            console.log("UnMount")
####    };
####  }, [])
<br/>
<br/>
확장프로그램
- React Developer Tool 크롬에 추가
- 개발자모드에서 컴포넌트별로 확인 가능