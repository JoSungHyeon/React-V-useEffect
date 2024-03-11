import { useEffect } from "react";

const Even = () => {
    useEffect(()=>{
        // 클린업, 정리함수
        return () => {
            console.log("UnMount")
        };
    }, [])
    return (
        <div>짝수입니다.</div>
    )
};

export default Even;