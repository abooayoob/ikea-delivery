import { useEffect, useState } from "react";
import "./App.css";

const data = [
  {
    id: "b9a46025-0211-4fca-8e72-850793866832",
    title: "SKÅRER",
    description: "Rammemadrass",
    image:
      "https://www.ikea.com/no/no/images/products/skarer-rammemadrass-medium-mork-beige__0395534_pe562568_s3.jpg",
    amount: 3,
  },
  {
    id: "2b0692a1-a227-480a-8464-c61ac3e35226",
    title: "HASVIK",
    description: "Skyvedører Par",
    image:
      "https://www.ikea.com/no/no/images/products/hasvik-skyvedorer-par-beige__1190198_pe900137_s3.jpg",
    amount: 1,
  },
  {
    id: "fa1f7dfd-599d-493c-9b63-f229f2b8a9aa",
    title: "PAX",
    description: "Garderobeskapstamme",
    image:
      "https://www.ikea.com/no/no/images/products/pax-garderobeskapstamme-hvitbeiset-eikemonster__0721071_pe733037_s3.jpg",
    amount: 1,
  },
  {
    id: "8b019d1a-4a50-4fbb-b3c6-39d36373ed64",
    title: "PAX",
    description: "Garderobeskapstamme",
    image:
      "https://www.ikea.com/no/no/images/products/pax-garderobeskapstamme-beige__1014795_pe835716_s3.jpg",
    amount: 1,
  },
  {
    id: "37e2a130-d615-4237-aab3-ac615947d29a",
    title: "KALLAX",
    description: "Hylle",
    image:
      "https://www.ikea.com/no/no/images/products/kallax-hylle-hvitbeiset-eikemonster__0459244_pe606045_s3.jpg",
    amount: 1,
  },
  {
    id: "c6728c63-c1ca-462e-b6f4-4215aeee51d6",
    title: "PAX",
    description: "Garderobeskapstamme",
    image:
      "https://www.ikea.com/no/no/images/products/pax-garderobeskapstamme-beige__1014805_pe835726_s3.jpg",
    amount: 2,
  },
  {
    id: "a521bf17-5103-4947-a6f5-ad72a402acae",
    title: "BESTÅ",
    description: "Veggmontert Skapkombinasjon",
    image:
      "https://www.ikea.com/no/no/images/products/besta-veggmontert-skapkombinasjon-hvit-lappviken-hvit__1053807_pe847238_s3.jpg",
    amount: 3,
  },
  {
    id: "1d811ed3-5eb8-47a7-bf2e-818be854cbf9",
    title: "BESTÅ",
    description: "Stamme",
    image:
      "https://www.ikea.com/no/no/images/products/besta-stamme-hvit__0376961_pe513559_s3.jpg",
    amount: 3,
  },
  {
    id: "3a1044a6-44d7-44ec-82de-429da70e5b5d",
    title: "BESTÅ",
    description: "Stamme",
    image:
      "https://www.ikea.com/no/no/images/products/besta-stamme-hvit__0376961_pe513559_s3.jpg",
    amount: 3,
  },
  {
    id: "bdd5dea2-db9d-4db9-83f8-43f09b733010",
    title: "LAPPVIKEN",
    description: "Dør",
    image:
      "https://www.ikea.com/no/no/images/products/lappviken-dor-hvit__0375438_pe553115_s3.jpg",
    amount: 3,
  },
  {
    id: "bd0f7b14-3eb1-42a4-9688-fe0504455ed5",
    title: "BESTÅ",
    description: "Hengsel, Myktlukkende/Trykk-Åpne",
    image:
      "https://www.ikea.com/no/no/images/products/besta-hengsel-myktlukkende-trykk-apne__0626848_pe693026_s3.jpg",
    amount: 3,
  },
  {
    id: "5800dd38-487d-424d-81d3-7171e964b897",
    title: "BESTÅ",
    description: "Hylleplate",
    image:
      "https://www.ikea.com/no/no/images/products/besta-hylleplate-hvit__1012652_pe828947_s3.jpg",
    amount: 3,
  },
  {
    id: "221f8673-a27e-404d-aca7-a886648f0ac4",
    title: "BESTÅ",
    description: "Veggskinne",
    image:
      "https://www.ikea.com/no/no/images/products/besta-veggskinne-solvfarget__0981312_pe815324_s3.jpg",
    amount: 3,
  },
  {
    id: "e097ac7a-ef37-4f8d-8c5a-ddb5a8450c2d",
    title: "HORNNES",
    description: "Overmadrass",
    image:
      "https://www.ikea.com/no/no/images/products/hornnes-overmadrass-hvit__1090690_pe862152_s3.jpg",
    amount: 3,
  },
  {
    id: "83c8a3cc-ebe6-4948-93e9-a66e64943280",
    title: "NYMÅNE",
    description: "Takspotlight Med 4 Spotter",
    image:
      "https://www.ikea.com/no/no/images/products/nymane-takspotlight-med-4-spotter-hvit__0607350_pe682899_s3.jpg",
    amount: 1,
  },
  {
    id: "ae20f7dc-82d8-42e9-b9a9-17d46c3944b0",
    title: "NYMÅNE",
    description: "Takspotlight Med 4 Spotter",
    image:
      "https://www.ikea.com/no/no/images/products/nymane-takspotlight-med-4-spotter-antrasitt__0646789_pe704306_s3.jpg",
    amount: 1,
  },
  {
    id: "a64e31e2-0fbd-46a7-a66e-604a9f2fcbae",
    title: "PÅHL",
    description: "Arbeidsbord",
    image:
      "https://www.ikea.com/no/no/images/products/pahl-arbeidsbord-hvit-turkis__1031726_pe836636_s3.jpg",
    amount: 1,
  },
  {
    id: "e0ade3e3-4f90-4330-9c45-679e7c420bb9",
    title: "PÅHL",
    description: "Bordplate",
    image:
      "https://www.ikea.com/no/no/images/products/pahl-bordplate-hvit__0734894_pe739640_s3.jpg",
    amount: 1,
  },
  {
    id: "7a0ea79e-000d-42a8-93ba-f8c6abe99c36",
    title: "PÅHL",
    description: "Bordplate",
    image:
      "https://www.ikea.com/no/no/images/products/pahl-bordplate-hvit__0734894_pe739640_s3.jpg",
    amount: 1,
  },
  {
    id: "7dd91c13-f36a-42e4-b206-58f06e8c43b6",
    title: "PÅHL",
    description: "Understell For Bordplate",
    image:
      "https://www.ikea.com/no/no/images/products/pahl-understell-for-bordplate-turkis__1014069_pe833005_s3.jpg",
    amount: 1,
  },
  {
    id: "4f893195-90b1-4dec-8596-afa6f7ea3ba4",
    title: "DIRIGERA",
    description: "Smart Hub",
    image:
      "https://www.ikea.com/no/no/images/products/dirigera-smart-hub-hvit-smart__1032017_pe836737_s3.jpg",
    amount: 1,
  },
  {
    id: "687afa82-9dcf-47fb-bfd7-8b5da066814b",
    title: "ELDBERGET / MALSKÄR",
    description: "Arbeidsstol",
    image:
      "https://www.ikea.com/no/no/images/products/eldberget-malskaer-arbeidsstol-mork-gra-svart__0814559_pe772629_s3.jpg",
    amount: 2,
  },
  {
    id: "1b3a8059-cf1e-4348-a1e6-0fb665099cff",
    title: "MALSKÄR",
    description: "Understell Arbeidsstol",
    image:
      "https://www.ikea.com/no/no/images/products/malskaer-understell-arbeidsstol-svart__0814477_pe778669_s3.jpg",
    amount: 2,
  },
  {
    id: "59987241-a57b-4707-8a00-3fd4146c4236",
    title: "MALSKÄR",
    description: "Understell Arbeidsstol",
    image:
      "https://www.ikea.com/no/no/images/products/malskaer-understell-arbeidsstol-svart__0814477_pe778669_s3.jpg",
    amount: 2,
  },
  {
    id: "1b8bc8fb-a9b4-4fa0-b84c-5f37adc7eb18",
    title: "KALLAX",
    description: "Hylle",
    image:
      "https://www.ikea.com/no/no/images/products/kallax-hylle-hvitbeiset-eikemonster__0459248_pe606048_s3.jpg",
    amount: 1,
  },
  {
    id: "845d412f-047b-4d28-af5c-94fada3ea9e2",
    title: "TROTTEN",
    description: "Bordplate",
    image:
      "https://www.ikea.com/no/no/images/products/trotten-bordplate-beige__1009436_pe827597_s3.jpg",
    amount: 2,
  },
  {
    id: "ff00622b-80c3-4e62-8c53-0794cbe613ee",
    title: "TRÅDFRI",
    description: "Fjernkontrollsett",
    image:
      "https://www.ikea.com/no/no/images/products/tradfri-fjernkontrollsett-smart-kan-dimmes-tradlost-varmhvit-til-kaldhvit__1008883_pe827360_s3.jpg",
    amount: 5,
  },
  {
    id: "bbbb3e9a-fe49-4a9c-bc7c-0dc69fb12b53",
    title: "LOBERGET / SIBBEN",
    description: "Barnekontorstol Med Pute",
    image:
      "https://www.ikea.com/no/no/images/products/loberget-sibben-barnekontorstol-med-pute-hvit-turkis__1154436_pe886029_s3.jpg",
    amount: 1,
  },
  {
    id: "2eaefc1d-da32-44fc-b042-1bd3db83de85",
    title: "LOBERGET",
    description: "Sete Til Juniorstol",
    image:
      "https://www.ikea.com/no/no/images/products/loberget-sete-til-juniorstol-hvit__0795190_pe765900_s3.jpg",
    amount: 1,
  },
  {
    id: "016f1353-08fc-46a0-9c5a-12e573138b94",
    title: "LOBERGET",
    description: "Sete Til Juniorstol",
    image:
      "https://www.ikea.com/no/no/images/products/loberget-sete-til-juniorstol-hvit__0795190_pe765900_s3.jpg",
    amount: 1,
  },
  {
    id: "d97d91a5-c64d-4192-9049-3aef6b7ef995",
    title: "SIBBEN",
    description: "Understell Til Svingbar Ungdomsstol",
    image:
      "https://www.ikea.com/no/no/images/products/sibben-understell-til-svingbar-ungdomsstol__0795186_pe765898_s3.jpg",
    amount: 1,
  },
  {
    id: "7913a5b9-63f6-47a3-b33e-804d916d9d39",
    title: "PYNTEN",
    description: "Sitteunderlag Barneskrivebordsstol",
    image:
      "https://www.ikea.com/no/no/images/products/pynten-sitteunderlag-barneskrivebordsstol-turkis__1151599_pe884957_s3.jpg",
    amount: 1,
  },
  {
    id: "f27caffc-a232-4789-a9d2-5032d8aad392",
    title: "TJUSIG",
    description: "Skohylle",
    image:
      "https://www.ikea.com/no/no/images/products/tjusig-skohylle-svart__0710715_pe727750_s3.jpg",
    amount: 1,
  },
  {
    id: "6055ddb6-34b7-40f1-8471-3af4f861ea66",
    title: "BERGSBO",
    description: "Dør",
    image:
      "https://www.ikea.com/no/no/images/products/bergsbo-dor-beige__1022276_pe833706_s3.jpg",
    amount: 2,
  },
  {
    id: "98916512-a106-4028-902e-8254e9ce9f33",
    title: "TJUSIG",
    description: "Hattehylle",
    image:
      "https://www.ikea.com/no/no/images/products/tjusig-hattehylle-svart__0710697_pe727727_s3.jpg",
    amount: 1,
  },
  {
    id: "46973076-dbca-47ff-bcb6-c1793e863400",
    title: "FREDVANG",
    description: "Sengeskuff/Nattbord",
    image:
      "https://www.ikea.com/no/no/images/products/fredvang-sengeskuff-nattbord-hvit__0962752_pe808963_s3.jpg",
    amount: 2,
  },
  {
    id: "ed70a680-a8df-425d-8425-0146f633c690",
    title: "KOMPLEMENT",
    description: "Skuff",
    image:
      "https://www.ikea.com/no/no/images/products/komplement-skuff-beige__1134540_pe878799_s3.jpg",
    amount: 4,
  },
  {
    id: "b88347c3-ab2f-4cde-83e0-cf9677371506",
    title: "KOMPLEMENT",
    description: "Skuff",
    image:
      "https://www.ikea.com/no/no/images/products/komplement-skuff-hvitbeiset-eikemonster__1106560_pe868778_s3.jpg",
    amount: 4,
  },
  {
    id: "4e2a6eb2-70c3-4aa3-aab3-a4ec9f855500",
    title: "VARDÖ",
    description: "Sengeskuff",
    image:
      "https://www.ikea.com/no/no/images/products/vardoe-sengeskuff-svart__0636228_pe697741_s3.jpg",
    amount: 2,
  },
  {
    id: "dee19ef5-c392-405e-9cfe-30cabd2dbea0",
    title: "BEKVÄM",
    description: "Trappestige",
    image:
      "https://www.ikea.com/no/no/images/products/bekvaem-trappestige-svart__0122139_pe278504_s3.jpg",
    amount: 1,
  },
  {
    id: "42fff967-2a33-4709-ad4c-9889837d32a8",
    title: "KOMPLEMENT",
    description: "Skuff",
    image:
      "https://www.ikea.com/no/no/images/products/komplement-skuff-beige__1135200_pe878931_s3.jpg",
    amount: 7,
  },
  {
    id: "1601d13b-7308-413a-ad1a-c97069eb823d",
    title: "BJORLI",
    description: "Ben",
    image:
      "https://www.ikea.com/no/no/images/products/bjorli-ben-rustfritt-stal__0636194_pe697722_s3.jpg",
    amount: 3,
  },
  {
    id: "dcc0effe-93c7-49b1-9950-43783c55e888",
    title: "KALLAX",
    description: "Understell",
    image:
      "https://www.ikea.com/no/no/images/products/kallax-understell-svart__1028806_pe835538_s3.jpg",
    amount: 1,
  },
  {
    id: "06c28bef-4ff6-4677-9c93-43c591be5340",
    title: "NORDMÄRKE",
    description: "Bærbar Trådløs Lader",
    image:
      "https://www.ikea.com/no/no/images/products/nordmaerke-baerbar-tradlos-lader__0934507_pe792426_s3.jpg",
    amount: 1,
  },
  {
    id: "090ddb3a-0e3f-425a-adfa-158fcb5b930e",
    title: "KNIPSA",
    description: "Kurv",
    image:
      "https://www.ikea.com/no/no/images/products/knipsa-kurv-siv__0713061_pe729165_s3.jpg",
    amount: 4,
  },
  {
    id: "b9a67dca-2398-4c44-b26c-f85c72b39dd5",
    title: "KOMPLEMENT",
    description: "Hengsler Med Dørdemper",
    image:
      "https://www.ikea.com/no/no/images/products/komplement-hengsler-med-dordemper__0626637_pe692929_s3.jpg",
    amount: 4,
  },
  {
    id: "06fa0d59-b288-471c-884e-fffdeefe40e9",
    title: "PURRPINGLA",
    description: "Skittentøysekk",
    image:
      "https://www.ikea.com/no/no/images/products/purrpingla-skittentoysekk-beige__0954079_pe803161_s3.jpg",
    amount: 2,
  },
  {
    id: "e9b57fbc-0651-4c0d-b974-902f2d34275f",
    title: "HÅRTE",
    description: "LED Arbeidslampe",
    image:
      "https://www.ikea.com/no/no/images/products/harte-led-arbeidslampe-svart-solvfarget__0683780_pe720869_s3.jpg",
    amount: 3,
  },
  {
    id: "1f5e14aa-6a87-4963-9870-8c89c67e2aae",
    title: "OLOV",
    description: "Ben, Justerbart",
    image:
      "https://www.ikea.com/no/no/images/products/olov-ben-justerbart-svart__0734628_pe739547_s3.jpg",
    amount: 8,
  },
  {
    id: "2d0290a5-a350-4ed0-ae2b-2d2531cd78ad",
    title: "KOMPLEMENT",
    description: "Hylleplate",
    image:
      "https://www.ikea.com/no/no/images/products/komplement-hylleplate-hvitbeiset-eikemonster__0721153_pe733083_s3.jpg",
    amount: 2,
  },
  {
    id: "7db826fc-f5d5-499a-9341-bfeae4aa08e6",
    title: "KOMPLEMENT",
    description: "Hylleplate",
    image:
      "https://www.ikea.com/no/no/images/products/komplement-hylleplate-beige__1014779_pe835704_s3.jpg",
    amount: 3,
  },
  {
    id: "a30eadb3-13ed-4b28-98ae-33a9be9b3075",
    title: "KOMPLEMENT",
    description: "Hylleplate",
    image:
      "https://www.ikea.com/no/no/images/products/komplement-hylleplate-beige__1014785_pe835710_s3.jpg",
    amount: 6,
  },
  {
    id: "21e1bd32-9d18-4640-b6ba-5923a2688a27",
    title: "PYNTEN",
    description: "Sitteunderlag",
    image:
      "https://www.ikea.com/no/no/images/products/pynten-sitteunderlag-mork-gra__0805853_pe769702_s3.jpg",
    amount: 2,
  },
  {
    id: "cfcdd07b-b1db-4b3e-b8fb-81a276bb445e",
    title: "BILLSBRO",
    description: "Håndtak",
    image:
      "https://www.ikea.com/no/no/images/products/billsbro-handtak-rustfritt-stalfarge__0754294_pe747875_s3.jpg",
    amount: 2,
  },
];

function App() {
  const [count, setCount] = useState<{
    [key: string]: {
      amount: string;
      count: number;
    };
  }>(() => {
    return data.reduce((acc, item) => {
      // @ts-ignore
      acc[item.id] = { amount: item.amount, count: 0 };
      return acc;
    }, {});
  });

  useEffect(() => {
    const count = localStorage.getItem("count");
    if (count) {
      setCount(JSON.parse(count));
    }
  }, []);

  const increment = (id: string) => {
    setCount((prev) => {
      let next = {
        ...prev,
        [id]: {
          // @ts-ignore
          ...prev[id],
          // @ts-ignore
          count: prev[id].count + 1,
        },
      };
      localStorage.setItem("count", JSON.stringify(next));
      return next;
    });
  };

  const decrement = (id: string) => {
    setCount((prev) => {
      let next = {
        ...prev,
        [id]: {
          // @ts-ignore
          ...prev[id],
          // @ts-ignore
          count: prev[id].count - 1,
        },
      };
      localStorage.setItem("count", JSON.stringify(next));
      return next;
    });
  };

  const totalCount = Object.values(count).reduce(
    (acc, curr) => acc + curr.count,
    0
  );

  const totalAmount = data.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <>
      <h1 className="main-title">Ikea Tellern</h1>
      <h2
        className="progress"
        style={{ color: totalCount === totalAmount ? "green" : "inherit" }}
      >
        {totalCount} / {totalAmount}
      </h2>
      <div className="card">
        {data.map((item) => (
          <div className="card-item" key={item.id}>
            <img src={item.image} className="card-image" alt="React logo" />
            <div className="card-content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="counter">
              <div className="buttons">
                <button
                  className="inc-button"
                  disabled={count[item.id].count === item.amount}
                  onClick={() => increment(item.id)}
                >
                  +
                </button>

                <button
                  className="dec-button"
                  disabled={count[item.id].count === 0}
                  onClick={() => decrement(item.id)}
                >
                  -
                </button>
              </div>
              <p
                className="count"
                style={{
                  color:
                    count[item.id].count === item.amount
                      ? "green"
                      : count[item.id].count > 0
                      ? "yellow"
                      : "inherit",
                }}
              >
                {count[item.id].count}/{item.amount}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
