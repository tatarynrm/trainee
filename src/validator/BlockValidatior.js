import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, "Мінімум 3 символи")
    .max(20, "Максимум 20 символів")
    .matches(/^[А-яГєЄіІїЇ]+$/, "Тільки кириличні символи")
    .required("Обов'язкове поле"),
  link: Yup.string()
    .matches(
      /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
      "Лише коректне посилання"
    )
    .required("Обов'язкове поле"),
  text: Yup.string()
    .matches(/^[Аа-яГєЄіІїЇ]/, "Тільки кириличні символи")
    .required("Обов'язкове поле"),
});
