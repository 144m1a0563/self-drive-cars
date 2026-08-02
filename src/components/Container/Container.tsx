interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`
        w-full
        max-w-[1600px]
        mx-auto
        px-5
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-16
        2xl:px-20
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;