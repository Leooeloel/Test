import React from "react";

interface ExternalLinkProps {
    to: string;
    children?: React.ReactNode;
    [rest: string]: any;
}

export const ExternalLink = ({ to, children, ...rest }: ExternalLinkProps) => (
    <a target="_blank" href={to} {...rest}>
        {children || to}
    </a>
);
