import React from "react";
import { Magra } from "next/font/google";
import clsx from "clsx";
import Link from "next/link";

const magraFont = Magra({ weight: "700", subsets: ["latin"] });

const socials = [
  {
    href: "https://www.linkedin.com/in/anton-morozov-0aba38226/",
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path
          d="M4.60638 21H0.117757V6.35058H4.60638V21ZM2.33436 4.55218C0.916658 4.55218 0 3.53356 0 2.27375C0 0.988179 0.944365 0 2.39208 0C3.8398 0 4.72644 0.988179 4.75415 2.27375C4.75415 3.53356 3.8398 4.55218 2.33436 4.55218ZM21 21H16.5114V12.8815C16.5114 10.9917 15.8603 9.70852 14.2371 9.70852C12.9971 9.70852 12.2606 10.5773 11.935 11.4132C11.815 11.7106 11.7849 12.1321 11.7849 12.5513V20.9977H7.29401V11.0222C7.29401 9.19336 7.23628 7.66425 7.17625 6.34824H11.0761L11.2816 8.38314H11.3716C11.9627 7.42774 13.4104 6.01806 15.8325 6.01806C18.7857 6.01806 21 8.02487 21 12.3382V21Z"
          className="fill-black dark:fill-white"
        />
      </svg>
    ),
  },
  {
    href: "https://github.com/Yoha485",
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
        <path
          d="M5.2886 0.345986C6.07908 0.612833 6.83108 0.981707 7.52541 1.4432C8.50601 1.19345 9.51431 1.06798 10.5264 1.06977C11.5717 1.06977 12.5801 1.19984 13.5253 1.44215C14.2194 0.981106 14.971 0.612587 15.7611 0.345986C16.4948 0.0973825 17.54 -0.305418 18.1611 0.379553C18.5821 0.845291 18.6874 1.62572 18.7621 2.22153C18.8463 2.88657 18.8663 3.75301 18.6453 4.61315C19.4905 5.70092 20 6.99849 20 8.41249C20 10.5545 18.8358 12.4143 17.1127 13.7024C16.2834 14.3145 15.3636 14.7944 14.3864 15.1248C14.6116 15.6388 14.7369 16.2073 14.7369 16.8042V19.951C14.7369 20.2292 14.626 20.496 14.4286 20.6928C14.2312 20.8895 13.9635 21 13.6843 21H7.36857C7.0894 21 6.82166 20.8895 6.62426 20.6928C6.42686 20.496 6.31595 20.2292 6.31595 19.951V18.9115C5.3107 19.0343 4.46756 18.9252 3.75072 18.622C3.00126 18.3052 2.47916 17.8143 2.08653 17.3444C1.7139 16.8996 1.30759 15.8968 0.720233 15.7017C0.589051 15.6582 0.467757 15.5893 0.363276 15.4991C0.258796 15.4088 0.173176 15.299 0.111303 15.1758C-0.0136538 14.9269 -0.0342933 14.6388 0.053925 14.3748C0.142143 14.1108 0.331993 13.8925 0.581709 13.768C0.831426 13.6434 1.12055 13.6229 1.38549 13.7108C2.08653 13.9436 2.54337 14.4472 2.856 14.852C3.36125 15.5024 3.77177 16.3521 4.57176 16.6909C4.90123 16.8304 5.38439 16.9216 6.14017 16.8188L6.31595 16.7832C6.31796 16.2123 6.43725 15.6479 6.66648 15.1248C5.68921 14.7944 4.76946 14.3145 3.94019 13.7024C2.21706 12.4143 1.05286 10.5555 1.05286 8.41249C1.05286 7.00059 1.56128 5.70407 2.40442 4.61735C2.18337 3.7572 2.20232 2.88866 2.28653 2.22257L2.29179 2.18271C2.36863 1.57222 2.45811 0.853682 2.88757 0.379553C3.50862 -0.305418 4.55492 0.0984316 5.28755 0.347035L5.2886 0.345986Z"
          className="fill-black dark:fill-white"
        />
      </svg>
    ),
  },

  {
    href: "https://t.me/wme_music",
    iconSvg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
        <path
          d="M1.5809 8.17947C7.75608 5.49838 11.8729 3.73066 13.9313 2.87666C19.8152 0.438013 21.0364 0.0144739 21.8339 0.000125024C22.0093 -0.00267877 22.3998 0.0405324 22.6546 0.245869C22.8664 0.419045 22.926 0.653245 22.9558 0.81768C22.9822 0.98195 23.0186 1.35634 22.9888 1.64859C22.6712 4.98676 21.2912 13.0874 20.5896 16.8264C20.2951 18.4084 19.7093 18.9388 19.1434 18.9906C17.9124 19.1034 16.9791 18.1805 15.7878 17.4023C13.9246 16.1841 12.8723 15.4261 11.0621 14.2377C8.9706 12.8641 10.3274 12.1091 11.5188 10.8754C11.8298 10.5525 17.2505 5.63922 17.3531 5.19358C17.3663 5.13784 17.3796 4.93003 17.2538 4.82051C17.1314 4.71067 16.9494 4.74828 16.817 4.77796C16.6283 4.82019 13.6533 6.78219 7.88183 10.6636C7.03796 11.2422 6.27351 11.5242 5.58517 11.5094C4.83065 11.4932 3.37455 11.0832 2.2924 10.7329C0.968678 10.3031 -0.0869939 10.0758 0.00566691 9.34585C0.0519973 8.96585 0.578178 8.57695 1.5809 8.17947Z"
          className="fill-black dark:fill-white"
        />
      </svg>
    ),
  },
];

export const Introduction = () => {
  return (
    <div className="flex flex-col justify-center">
      <h1
        className={clsx(
          magraFont.className,
          "mb-[20px] -translate-x-0 text-[80px] leading-none lg:mb-0 lg:-translate-x-2 lg:text-[160px]",
        )}
      >
        Hi{" "}
        <span className="relative">
          There
          <svg
            className="absolute -right-16 -top-2"
            xmlns="http://www.w3.org/2000/svg"
            width="61"
            height="61"
            viewBox="0 0 61 61"
            fill="none"
          >
            <path
              d="M30.5 0L34.7918 26.2082L61 30.5L34.7918 34.7918L30.5 61L26.2082 34.7918L0 30.5L26.2082 26.2082L30.5 0Z"
              className="fill-black dark:fill-white"
            />
          </svg>
        </span>
      </h1>

      <p className="mt-4 max-w-[450px]">
        My name is Anton. I have a passion for programming, mathematics, and music. <br />
        <br /> This website is the central hub where you can find all the information about me and my <br /> work.
      </p>

      <div className="mt-10 flex justify-between gap-2.5 md:justify-start">
        {socials.map(({ href, iconSvg }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            className="rounded-[15px] border-[1px] border-black px-10 py-3 md:px-12 dark:border-white"
          >
            {iconSvg}
          </a>
        ))}
      </div>
    </div>
  );
};
