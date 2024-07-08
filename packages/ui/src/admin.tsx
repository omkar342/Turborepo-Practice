"use client";
interface AdminProps {
    name: string;
}

export const Admin = ({name}: AdminProps) => {
    return (
        <>
            <h1>Admin</h1>
            <h2>Hello this is a admin page of {name}</h2>
        </>
    );
};
