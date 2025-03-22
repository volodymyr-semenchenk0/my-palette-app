import React from "react";

const CopyButton = ({className}) => {
    return (
        <div
            className={`p-4 rounded-md border bg-white/20 border-white/20 ${className}`}>
            Copy Color
        </div>
    );
}

export default CopyButton;