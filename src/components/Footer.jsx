import logoHvid from '/logo-hvid.png';
import fbIcon from '/fbicon.svg';
import igIcon from '/igicon.svg';
import linkedinIcon from '/linkedinicon.svg';

export default function Footer() {
  return (
    <footer
        className="mt-[48px] pt-[5%] w-full"
        style={{
            background: "linear-gradient(180deg, #DCECF100 0%, var(--color-main-light) 50%)"
        }}
    >
        <div className="px-5 sm:px-10 lg:px-20">
            <div className="mb-8">
            <h3 className="font-title text-accent text-white mb-4 uppercase">
                genveje
            </h3>
            <ul className="space-y-2">
                <li>
                <a
                    href="#"
                    className="text-accent text-white font-medium leading-[1.5] block hover:opacity-80 transition-opacity"
                >
                    Ofte stillede spørgsmål
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="text-accent text-white font-medium leading-[1.5] block hover:opacity-80 transition-opacity"
                >
                    Datapolitik
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="text-accent text-white font-medium leading-[1.5] block hover:opacity-80 transition-opacity"
                >
                    Kontakt os
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="text-accent text-white font-medium leading-[1.5] block hover:opacity-80 transition-opacity"
                >
                    Presse
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="text-accent text-white font-medium leading-[1.5] block hover:opacity-80 transition-opacity"
                >
                    BLÅ SOL App
                </a>
                </li>
                <li>
                <a
                    href="#"
                    className="text-accent text-white font-medium leading-[1.5] block hover:opacity-80 transition-opacity"
                >
                    Støt BLÅ SOL
                </a>
                </li>
            </ul>
            </div>
        
            <div className="flex justify-center my-4">
            <img
                src={logoHvid}
                alt="BLÅ SOL Festival Logo"
                className="w-[80px] h-auto"
            />
            </div>

            <div className="flex justify-center w-[40%] mx-auto gap-x-6 pb-4">
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={fbIcon} alt="Facebook" className="w-[30px] h-[30px]" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={igIcon} alt="Instagram" className="w-[30px] h-[30px]" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-[30px] h-[30px]" />
                </a>
            </div>
        </div>
    </footer>
  );
}