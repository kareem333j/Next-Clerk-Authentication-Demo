"use client";

import { useFormStatus } from "react-dom"

export const Submit = ({ title, titleLoading, className }: { title: string, titleLoading?: string, className?: string }) => {
    const { pending } = useFormStatus();
    return (
        <button className={className} type="submit">
            {pending ? titleLoading?titleLoading:title : title}
        </button>
    )
}