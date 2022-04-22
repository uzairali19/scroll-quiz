import { Formik, Field, Form } from "formik";
import Image from "next/image";
import Footer from "./Footer";

const data = [
  {
    question:
      "What is the name of the main character in the first season of the show?",
    options: ["The Doctor", "The Master", "The Grandmaster", "The Great"],
    image: '/icon-01.png',
  },
  {
    question:
      "What is the name of the main character in the second season of the show?",
    options: [
      "Second doctor",
      "Second Master",
      "Section Grandmaster",
      "Second Great",
    ],
    image: '/icon-02.png',
  },
  {
    question:
      "What is the name of the main character in the third season of the show?",
    options: [
      "Third Doctor",
      "Third Master",
      "Third Grandmaster",
      "Third Great",
    ],
    image: '/icon-03.png',
  },
];

const MainForm = ({ setSection, section, setIsSubmitted }) => {
  const nextSectionHandler = () => {
    if (section.value !== 2) {
      setSection({
        i: section.i + 1,
        value: section.value + 1,
      });
    }
  };

  const previousSectionHandler = () => {
    setSection({
      i: section.i - 1,
      value: section.value - 1,
    });
  };

  const submitHandler = (values, helpers) => {
    setIsSubmitted({
      submit: true,
      values: JSON.stringify(values),
    });
    setTimeout(() => {
      setIsSubmitted({
        submit: false,
        values: {},
      })
    }, 8000);
    helpers.resetForm();
    setSection({
      i: 0,
      value: 0,
    });
  }
  
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Formik
        initialValues={{
          first: "",
          second: "",
          third: "",
        }}
        onSubmit={async (values, helpers) => {
          if (section.value === 2) {
            submitHandler(values, helpers);
          } else {
            nextSectionHandler();
          }
        }}
      >
        <Form className="flex justify-between" autoComplete="off">
          <div className="w-[40%]">
            <div className="text-[11px] uppercase font-bold tracking-widest text-red-400">
              Question {section.i}/{data.length}
            </div>
            <div className="uppercase font-semibold" id="my-radio-group">
              {data[section.value].question}
            </div>
            <Image src={data[section.value].image} width={500} height={500} alt="main-icon"/>
          </div>
          <div
            className="options"
            role="group"
            aria-labelledby="my-radio-group"
          >
            {data[section.value].options.map((option, index) => (
              <label
                key={index}
                htmlFor={`option-${index}`}
                className="flex gap-5 border-t-[1px] border-[#e2e8f0] hover:border-red-400 hover:border-2 hover:cursor-pointer radio-button p-6 w-96"
              >
                <Field
                  type="radio"
                  name={
                    section.value === 0
                      ? "first"
                      : section.value === 1
                      ? "second"
                      : "third"
                  }
                  value={option}
                  id={`option-${index}`}
                  className="h-[24px] w-[24px] hover:cursor-pointer checked:outline-slate-400"
                />
                {option}
              </label>
            ))}
          </div>
          <button
            className="border-[1px] rounded-full p-3 mt-5 absolute top-[10%] lg:left-[48.3%] xl:left-[48.7%] 2xl:left-[49%] z-10 bg-white"
            onClick={previousSectionHandler}
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 21 14"
            >
              <path
                fill="#B4A76C"
                fillR
                ule="nonzero"
                d="M10.5 0L21 10.413 17.385 14 10.5 7.171 3.615 14 0 10.414z"
              ></path>
            </svg>
          </button>
          <button
            className="border-[1px] rounded-full p-3 mt-5 absolute bottom-[10%] lg:left-[48.3%] xl:left-[48.7%] 2xl:left-[49%] z-10 bg-white"
            type="submit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 21 14"
            >
              <path
                fill="#B4A76C"
                fillRule="nonzero"
                d="M10.5 14L0 3.587 3.615 0 10.5 6.829 17.385 0 21 3.586z"
              ></path>
            </svg>
          </button>
        </Form>
      </Formik>
      <span className="border-r-[1px] border-slate-200 h-screen absolute -z-10 left-[50%] hover:cursor-pointer"></span>
      <Footer />
    </div>
  );
};

export default MainForm;
