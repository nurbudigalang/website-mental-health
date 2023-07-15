import React, { useState } from 'react';
import { AiOutlineUser, AiOutlineLeftCircle } from 'react-icons/ai';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { BiTrashAlt, BiHomeAlt2 } from 'react-icons/bi';
import { FiLogOut } from 'react-icons/fi';
import { Link } from '@inertiajs/inertia-react';

const NavProfil2 = () => {
  const [open, setOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const Menus = [
    { title: 'Dashboard', icon: BiHomeAlt2, route: '/' },
    { title: 'Jadwal Konsultasi', icon: AiOutlineUser, route: '/jadwalkonsultasi' },
    { title: 'Atur Ketersediaan', icon: HiOutlineShoppingCart, route: '/aturketersediaan' },
    { title: 'Hapus Profil', icon: BiTrashAlt, gap:true, route: '/hapusprofil' },
    { title: 'Keluar', icon: FiLogOut, route: '/login' },
  ];

  const handleMouseEnter = (index) => {
    if (open) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (open) {
      setHoveredIndex(null);
    }
  };

  return (
    <>
      <div className="absolute">
        <div
          className={`${
            open ? 'w-72' : 'w-20'
          } p-5 duration-500 h-screen bg-primary absolute left-0`}
        >
          <AiOutlineLeftCircle
            className={`absolute cursor-pointer -right-3 top-9 w-7 ${
              !open && 'rotate-180'
            }`}
            onClick={() => setOpen(!open)}
            size={40}
            color="#333333"
          />

          <div className="flex gap-x-4 items-center">
            <h1
              className={`text-white origin-left  text-2xl font-semibold duration-300 ${
                !open && 'scale-0'
              }`}
            >
              MENTAL HEALTH
            </h1>
          </div>
          <ul className="pt-6">
            {Menus.map((menu, index) => (
              <li
                key={index}
                className={`text-putih text-md font-medium flex items-center gap-x-4 cursor-pointer p-2 hover:bg-putih hover:text-primary hover:bg-opacity-90 hover:font-semibold rounded-sm ${
                  menu.gap ? 'mt-72' : 'mt-2'
                } ${menu.title === 'Hapus Akun' ? 'border-t-4 border-white' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                {menu.icon && (
                  <Link href={menu.route} className="w-6">
                    <menu.icon
                      className={`w-6 ${
                        open && hoveredIndex === index && 'text-primary'
                      } transition-colors duration-300`}
                      size={36}
                      style={{
                        color:
                          open && hoveredIndex === index ? '#4C9BF5' : '#FDFDFD',
                      }}
                    />
                  </Link>
                )}

                <Link
                  to={menu.route}
                  className={`${
                    !open && 'hidden'
                  } origin-left duration-400 ${
                    open && hoveredIndex === index && 'text-primary'
                  }`}
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavProfil2;