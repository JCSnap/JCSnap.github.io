function Link({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <a href={href} className="text-blue-500 hover:underline">
            {children}
        </a>
    );
}

export default Link;
