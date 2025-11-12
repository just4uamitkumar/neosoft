import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black shadow-md sticky">
      <div className="max-w-[1500px] mx-auto flex items-center py-3 w-full">
        <div className="text-white text-center w-full">
          <p className="w-full sm:w-auto leading-relaxed">
           Copyright &copy; <time dateTime="2022">2022</time>–
            <time dateTime="2025">2025</time> NeoSOFT Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
