import Image from "next/image";

export default function Headers() {
  return (
    <>
      <div
        className="sm:flex flex-row justify-between h-10 p-2 w-screen fixed z-50 mb-14"
        style={{ backgroundColor: "#CAEDAC" }}
      >
        <div className="hidden sm:flex flex-row gap-5 mx-7 align-baseline">
          <a href="#">
            <Image
              alt="facebook icon"
              loading="lazy"
              width={24}
              height={24}
              className="hover:fill-primary-green h-5 lg:h-fit object-fill"
              style={{ color: "transparent" }}
              src="https://expertbuildcare.in/_next/static/media/fb.3783183f.svg"
            />
          </a>
          <a href="#">
            <Image
              alt="instagram icon"
              loading="lazy"
              width={25}
              height={24}
              className="hover:fill-primary-green h-5 lg:h-fit object-fill"
              style={{ color: "transparent" }}
              src="https://expertbuildcare.in/_next/static/media/insta.46110a6c.svg"
            />
          </a>
          <a href="#">
            <Image
              alt="youtube icon"
              loading="lazy"
              width={28}
              height={22}
              className="hover:fill-primary-green h-5 lg:h-fit object-fill"
              style={{ color: "transparent" }}
              src="https://expertbuildcare.in/_next/static/media/yt.b661d77e.svg"
            />
          </a>
          <p className="font-bold align-middle inline">sarwinplasttamilnadu</p>
        </div>
        <div className="flex flex-row gap-5 max-7 font-bold">
          <div className="hidden sm:flex flex-row gap-2 max-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.9995 4.00015H3.99951C2.89951 4.00015 2.00951 4.90015 2.00951 6.00015L1.99951 18.0002C1.99951 19.1002 2.89951 20.0002 3.99951 20.0002H19.9995C21.0995 20.0002 21.9995 19.1002 21.9995 18.0002V6.00015C21.9995 4.90015 21.0995 4.00015 19.9995 4.00015ZM19.9995 18.0002H3.99951V8.00015L11.9995 13.0002L19.9995 8.00015V18.0002ZM11.9995 11.0002L3.99951 6.00015H19.9995L11.9995 11.0002Z"
                fill="#0E1031"
              />
            </svg>
            <p>info@expertbuildcare.com</p>
          </div>
          <div className="flex align-middle mx-20 text-center justify-normal sm:justify-normal sm:flex-row sm:gap-2 ms:max-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6.53985 4.99985C6.59985 5.88985 6.74985 6.75985 6.98985 7.58985L5.78985 8.78985C5.37985 7.58985 5.11985 6.31985 5.02985 4.99985H6.53985ZM16.3998 17.0198C17.2498 17.2598 18.1198 17.4098 18.9998 17.4698V18.9598C17.6798 18.8698 16.4098 18.6098 15.1998 18.2098L16.3998 17.0198ZM7.49985 2.99985H3.99985C3.44985 2.99985 2.99985 3.44985 2.99985 3.99985C2.99985 13.3898 10.6098 20.9998 19.9998 20.9998C20.5499 20.9998 20.9998 20.5499 20.9998 19.9998V16.5098C20.9998 15.9598 20.5499 15.5098 19.9998 15.5098C18.7598 15.5098 17.5498 15.3098 16.4298 14.9398C16.3298 14.8998 16.2198 14.8898 16.1199 14.8898C15.8598 14.8898 15.6098 14.9898 15.4098 15.1798L13.2098 17.3798C10.3798 15.9298 8.05985 13.6198 6.61985 10.7898L8.81985 8.58985C9.09985 8.30985 9.17985 7.91985 9.06985 7.56985C8.69985 6.44985 8.49985 5.24985 8.49985 3.99985C8.49985 3.44985 8.04985 2.99985 7.49985 2.99985Z"
                fill="#0E1031"
              />
            </svg>
            <p>8110044744</p>
          </div>
        </div>
      </div>
    </>
  );
}
