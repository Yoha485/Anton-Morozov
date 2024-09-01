import clsx from "clsx";

type SunIconProps = {
  className?: string;
};

export const SunIcon: React.FC<SunIconProps> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      className={clsx(className, "h-6 w-6")}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1.25C12.1989 1.25 12.3897 1.32902 12.5303 1.46967C12.671 1.61032 12.75 1.80109 12.75 2V3C12.75 3.19891 12.671 3.38968 12.5303 3.53033C12.3897 3.67098 12.1989 3.75 12 3.75C11.8011 3.75 11.6103 3.67098 11.4697 3.53033C11.329 3.38968 11.25 3.19891 11.25 3V2C11.25 1.80109 11.329 1.61032 11.4697 1.46967C11.6103 1.32902 11.8011 1.25 12 1.25ZM12 6.25C10.475 6.25 9.01247 6.8558 7.93414 7.93414C6.8558 9.01247 6.25 10.475 6.25 12C6.25 13.525 6.8558 14.9875 7.93414 16.0659C9.01247 17.1442 10.475 17.75 12 17.75C13.525 17.75 14.9875 17.1442 16.0659 16.0659C17.1442 14.9875 17.75 13.525 17.75 12C17.75 10.475 17.1442 9.01247 16.0659 7.93414C14.9875 6.8558 13.525 6.25 12 6.25ZM5.46 4.399C5.31861 4.26231 5.1292 4.18663 4.93255 4.18824C4.7359 4.18986 4.54775 4.26865 4.40863 4.40764C4.26951 4.54663 4.19054 4.7347 4.18874 4.93135C4.18694 5.128 4.26245 5.31748 4.399 5.459L5.106 6.166C5.17466 6.23969 5.25746 6.29879 5.34946 6.33978C5.44146 6.38077 5.54077 6.40281 5.64148 6.40459C5.74218 6.40637 5.84221 6.38784 5.9356 6.35012C6.02899 6.3124 6.11382 6.25626 6.18504 6.18504C6.25626 6.11382 6.3124 6.02899 6.35012 5.9356C6.38784 5.84221 6.40637 5.74218 6.40459 5.64148C6.40281 5.54077 6.38077 5.44146 6.33978 5.34946C6.29879 5.25746 6.23969 5.17466 6.166 5.106L5.46 4.399ZM22.75 12C22.75 12.1989 22.671 12.3897 22.5303 12.5303C22.3897 12.671 22.1989 12.75 22 12.75H21C20.8011 12.75 20.6103 12.671 20.4697 12.5303C20.329 12.3897 20.25 12.1989 20.25 12C20.25 11.8011 20.329 11.6103 20.4697 11.4697C20.6103 11.329 20.8011 11.25 21 11.25H22C22.1989 11.25 22.3897 11.329 22.5303 11.4697C22.671 11.6103 22.75 11.8011 22.75 12ZM19.601 5.46C19.6727 5.39085 19.7298 5.30812 19.7692 5.21663C19.8085 5.12515 19.8293 5.02674 19.8302 4.92716C19.8311 4.82758 19.8122 4.72881 19.7745 4.63662C19.7368 4.54443 19.6812 4.46066 19.6108 4.39021C19.5404 4.31976 19.4567 4.26403 19.3645 4.22628C19.2724 4.18852 19.1736 4.1695 19.0741 4.17032C18.9745 4.17113 18.876 4.19178 18.7845 4.23104C18.693 4.2703 18.6102 4.3274 18.541 4.399L17.834 5.106C17.7603 5.17466 17.7012 5.25746 17.6602 5.34946C17.6192 5.44146 17.5972 5.54077 17.5954 5.64148C17.5936 5.74218 17.6122 5.84221 17.6499 5.9356C17.6876 6.02899 17.7437 6.11382 17.815 6.18504C17.8862 6.25626 17.971 6.3124 18.0644 6.35012C18.1578 6.38784 18.2578 6.40637 18.3585 6.40459C18.4592 6.40281 18.5585 6.38077 18.6505 6.33978C18.7425 6.29879 18.8253 6.23969 18.894 6.166L19.601 5.46ZM12 20.25C12.1989 20.25 12.3897 20.329 12.5303 20.4697C12.671 20.6103 12.75 20.8011 12.75 21V22C12.75 22.1989 12.671 22.3897 12.5303 22.5303C12.3897 22.671 12.1989 22.75 12 22.75C11.8011 22.75 11.6103 22.671 11.4697 22.5303C11.329 22.3897 11.25 22.1989 11.25 22V21C11.25 20.8011 11.329 20.6103 11.4697 20.4697C11.6103 20.329 11.8011 20.25 12 20.25ZM18.894 17.834C18.8253 17.7603 18.7425 17.7012 18.6505 17.6602C18.5585 17.6192 18.4592 17.5972 18.3585 17.5954C18.2578 17.5936 18.1578 17.6122 18.0644 17.6499C17.971 17.6876 17.8862 17.7437 17.815 17.815C17.7437 17.8862 17.6876 17.971 17.6499 18.0644C17.6122 18.1578 17.5936 18.2578 17.5954 18.3585C17.5972 18.4592 17.6192 18.5585 17.6602 18.6505C17.7012 18.7425 17.7603 18.8253 17.834 18.894L18.541 19.601C18.6097 19.6747 18.6925 19.7338 18.7845 19.7748C18.8765 19.8158 18.9758 19.8378 19.0765 19.8396C19.1772 19.8414 19.2772 19.8228 19.3706 19.7851C19.464 19.7474 19.5488 19.6913 19.62 19.62C19.6913 19.5488 19.7474 19.464 19.7851 19.3706C19.8228 19.2772 19.8414 19.1772 19.8396 19.0765C19.8378 18.9758 19.8158 18.8765 19.7748 18.7845C19.7338 18.6925 19.6747 18.6097 19.601 18.541L18.894 17.834ZM3.75 12C3.75 12.1989 3.67098 12.3897 3.53033 12.5303C3.38968 12.671 3.19891 12.75 3 12.75H2C1.80109 12.75 1.61032 12.671 1.46967 12.5303C1.32902 12.3897 1.25 12.1989 1.25 12C1.25 11.8011 1.32902 11.6103 1.46967 11.4697C1.61032 11.329 1.80109 11.25 2 11.25H3C3.19891 11.25 3.38968 11.329 3.53033 11.4697C3.67098 11.6103 3.75 11.8011 3.75 12ZM6.166 18.894C6.29848 18.7518 6.3706 18.5638 6.36718 18.3695C6.36375 18.1752 6.28503 17.9898 6.14762 17.8524C6.01021 17.715 5.82482 17.6363 5.63052 17.6328C5.43622 17.6294 5.24817 17.7015 5.106 17.834L4.399 18.541C4.26652 18.6832 4.1944 18.8712 4.19782 19.0655C4.20125 19.2598 4.27997 19.4452 4.41738 19.5826C4.55479 19.72 4.74018 19.7987 4.93448 19.8022C5.12878 19.8056 5.31683 19.7335 5.459 19.601L6.166 18.894Z"
        className="fill-black dark:fill-white"
      />
    </svg>
  );
};