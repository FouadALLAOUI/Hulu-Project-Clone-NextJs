function HeaderItem({ Icon, title }) {
    return (
      <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce" style={{ height: "2rem", marginBottom: "0.25rem" }} />
        <p className="opacity-0 group-hover:opacity-100  transition-opacity">
          {title}
        </p>        
      </div>
    );
  }
  
  export default HeaderItem;
