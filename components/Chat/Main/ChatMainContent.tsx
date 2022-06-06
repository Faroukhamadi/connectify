import { FC } from 'react';

interface Props {
  messages: Array<string>;
}

const ChatMainContent: FC<Props> = ({ messages }) => {
  return (
    <div>
      <div className="flex justify-start overflow-y-scroll">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norked</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norked</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norked</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norked</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norked</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norked</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norked</p>
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-lg bg-gray-200 flex justify-start w-fit text-black font-helvetica my-3 p-2 mx-3">
          <p>Njareb el messenger fih mochkla walle</p>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Chwaya ekher bech norkeed ya bro</p>
        </div>
      </div>
      {messages.map((message, index) => (
        <div key={index} className="flex justify-end">
          <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
            <p>{message}</p>
          </div>
        </div>
      ))}
      {/* HACK: Do not modify this message since it's used as a placeholder div to render components correctly */}
      <div className="flex justify-end">
        <div className="rounded-lg bg-discord flex justify-end w-fit text-white font-helvetica my-3 p-2 mx-10">
          <p>Dummy Message</p>
        </div>
      </div>
    </div>
  );
};

export default ChatMainContent;
