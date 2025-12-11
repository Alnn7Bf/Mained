function ServiceCard({ image, icon, title, description, position}) {
  const Icon = icon;

  return (
    <div className="relative overflow-hidden rounded-global cursor-pointer">
      <div className="absolute inset-0 bg-cover transition-opacity duration-300" style={{ backgroundImage: `url(${image})`, backgroundPosition: `0% ${position}%` }}></div>
      <div className="relative h-full flex flex-col gap-2 p-6 items-center bg-black/60 md:bg-light md:hover:bg-black/40 text-light md:text-black hover:text-light transition-colors duration-300">
        <div className="flex h-24 w-24 justify-center items-center">
          <Icon size={60} />
        </div>
        <h3 className="text-xl font-medium tracking-widest text-center text-inherit">
          {title}
        </h3>
        <p className="text-sm text-inherit/60 text-center">{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;