import axios, { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Bean } from "../../../types/Beans.ts";
import { Loader } from "../../Loader/Loader.tsx";
import styles from "./styles.module.css";

const BeanPage: FC = () => {
  const { beanId } = useParams<{ beanId: string }>();
  const [bean, setBean] = useState<Bean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBean = async () => {
      try {
        const response: AxiosResponse<Bean> = await axios.get(
          `https://jellybellywikiapi.onrender.com/api/beans/${beanId}`,
        );
        setBean(response.data);
        setLoading(false);
      } catch (error) {
        setError("Не удалось загрузить данные о бобе.");
        setLoading(false);
        console.error("Error fetching bean:", error);
      }
    };

    if (beanId) {
      void fetchBean();
    }
  }, [beanId]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!bean) {
    return <div>Боб не найден.</div>;
  }

  return (
    <main>
      <h1>Explore All Beans ...</h1>
      <div>
        <div
          className={styles.bean_container}
          style={{ background: bean.backgroundColor }}
        >
          <img src={bean.imageUrl} alt="" />
          <div className={styles.info}>
            <h1>{bean.flavorName}</h1>
            <h3>{bean.description}</h3>
            <p>Ingredients: {bean.ingredients?.join(", ")}</p>
            <p>{bean.glutenFree ? "No gluten" : "With gluten"}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BeanPage;
