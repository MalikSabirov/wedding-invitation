import firstImage from "../assets/1.png";
import secondImage from "../assets/2.png";
import thirdImage from "../assets/3.png";
import { ImageCard } from "./image-card";
import wrapper from "../assets/wrapper.webp";

export default function InvitationPage() {
  return (
    <div className="min-h-screen max-w-full bg-white text-gray-800 font-serif">
      <div className="max-w-screen-sm mx-auto">
        {/* Top three vertical image/date columns */}
        <div className="flex gap-3 sm:h-96 h-3/5">
          <ImageCard src={firstImage} txt="06" />
          <ImageCard src={secondImage} txt="12" />
          <ImageCard src={thirdImage} txt="25" />
        </div>

        {/* Center name card with overlay frames and round stamp */}
        <div className="">
          <img src={wrapper} className="object-cover rotate-90" />

          {/* <div className="absolute transform rotate-3 border border-gray-200 w-[86%] h-36 -z-10"></div> */}
          {/* <div className="absolute transform rotate-3 border border-red-600 w-[86%] h-36 -z-10"></div> */}
          {/* <div className="absolute transform -rotate-2 border border-gray-200 w-[78%] h-36 -z-20"></div> */}

          {/* <div className="bg-white shadow-lg px-8 py-6 w-full text-center">
            <div className="text-2xl text-gray-500 italic">Мақсат</div>
            <div className="text-2xl text-gray-500 italic">&amp;</div>
            <div className="text-2xl text-gray-500 italic">Акерке</div>
          </div> */}

          {/* round stamp placeholder (SVG) */}
          {/* <div className="absolute left-2 bottom-[-18px] bg-white rounded-full w-11 h-11 flex items-center justify-center shadow">
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#111"
                strokeWidth="0.8"
                fill="none"
              />
              <rect x="8" y="8" width="8" height="8" fill="#111" />
            </svg>
          </div> */}
        </div>

        {/* Two images row (can be empty) */}
        {/* <div className="grid grid-cols-2 gap-3 mt-6">
          <div className="h-40 overflow-hidden bg-gray-50">
            <img
              src="/mnt/data/eb78316e-c4dd-401e-9ede-1a638087e321.png"
              alt="table"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="h-40 overflow-hidden bg-gray-50">
            <img
              src="/mnt/data/76e568cd-d672-4d9e-aa9f-c586061c3a60.png"
              alt="ring2"
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}

        {/* Centered invitation text in Kazakh (use your copy) */}
        {/* <div className="text-center mt-8 px-4 leading-relaxed">
          <p className="uppercase tracking-widest text-sm">Құрметті</p>
          <p className="mt-2">
            АҒАЙЫН-ТУЫС, БАУЫРЛАР, НАҒАШЫ-ЖИЕН, БӨЛЕҢЕР, КҰДА-ЖЕКЖАТ,
            ДОС-ЖАРАНДАР, ӘРІПТЕСТЕР МЕН ҚОРШАЛАР!
          </p>

          <p className="mt-6 italic text-lg">Сіздерді балаларымыз</p>
          <p className="text-2xl font-light italic mt-2">
            Мақсат <span className="text-base">пен</span> Акеркенің
          </p>
          <p className="mt-4">
            үйлену тойына арналған салтанатты ақ дастарханымыздың қадірлі қонағы
            болуға шақырамыз!
          </p>
        </div> */}

        {/* small centered image */}
        {/* <div className="flex justify-center mt-8">
          <div className="w-20 h-20 overflow-hidden rounded-md bg-gray-100">
            <img
              src="/mnt/data/fca262aa-9be9-41bf-ade9-8d250648e937.png"
              alt="hands"
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}

        {/* Calendar / details section */}
        {/* <div className="mt-8 text-center">
          <h3 className="italic text-2xl">Той салтанаты:</h3>
          <p className="mt-3 uppercase">
            05 Қазан 2025 жыл
            <br />
            сағат 18:00
          </p> */}

        {/* mini calendar (simple) */}
        {/* <div className="mt-4 inline-block">
            <div className="grid grid-cols-7 text-sm gap-1">
              {["ДC", "СC", "СР", "БC", "ЖМ", "СБ", "ЖС"].map((d) => (
                <div key={d} className="text-xs font-medium">
                  {d}
                </div>
              ))} */}

        {/* numbers 1..31 */}
        {/* {Array.from({ length: 31 }, (_, i) => i + 1).map((n) => (
                <div
                  key={n}
                  className={`text-sm p-1 ${
                    n === 5
                      ? "border rounded-full border-gray-600"
                      : "opacity-80"
                  } flex items-center justify-center`}
                >
                  {n}
                </div>
              ))}
            </div>
          </div>
        </div> */}

        {/* venue card */}
        {/* <div className="relative mt-8 flex justify-center">
          <div className="absolute transform rotate-3 border border-gray-200 w-[86%] h-28 -z-10"></div>
          <div className="bg-white shadow-lg px-6 py-6 w-full text-center">
            <h4 className="italic text-xl">Той мекені:</h4>
            <p className="mt-2 uppercase font-medium">Нұрлыбек-ләззат</p>
          </div>
        </div> */}

        {/* address */}
        {/* <div className="mt-8 text-center">
          <h5 className="italic text-xl">Мекен-жайымыз:</h5>
          <p className="mt-2">
            Қызылорда қаласы,
            <br />
            42-КӨШЕ, 9
          </p>
        </div> */}

        {/* small footer image */}
        {/* <div className="mt-8 flex justify-center">
          <div className="w-24 h-24 overflow-hidden rounded-md bg-gray-100">
            <img
              src="/mnt/data/eb78316e-c4dd-401e-9ede-1a638087e321.png"
              alt="groom"
              className="object-cover w-full h-full"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
