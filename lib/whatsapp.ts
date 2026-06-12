"use client";
export const whatsapp = (content: string) => {
  const urls = [
    "https://web.whatsapp.com/send?phone=5581973265132&text=" + content,
    "https://web.whatsapp.com/send?phone=5544998041806&text=" + content,
  ];
  window.open(urls[Math.floor(Math.random() * urls.length)], "_blank");
};
