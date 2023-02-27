interface PlanetLayoutProps {
  children: React.ReactNode;
}

const PlanetLayout = ({ children }: PlanetLayoutProps) => {
  return <div className="mt-5">{children}</div>;
};

export default PlanetLayout;
