import { Outlet } from "react-router-dom";

const Exam = () => {
    return (
        <div>
                This is exam component

                <Outlet/>
        </div>
    );
};

export default Exam;