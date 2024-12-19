import axios, { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bean } from "../../../types/Beans.ts";
import { Loader } from "../../Loader/Loader.tsx";
import styles from "./styles.module.css";

type ApiResponse = {
  items: Bean[];
};

const BeansPage: FC = () => {
  const [beansData, setBeansData] = useState<Bean[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(
          "https://jellybellywikiapi.onrender.com/api/beans",
          { params: { pageSize: 90 } },
        );
        setBeansData(response.data.items);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError("Не удалось загрузить данные о бобах.");
        setLoading(false);
        console.error("Error fetching beans:", error);
      }
    };

    void fetchBeans();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <main>
      <h1 className={styles.titleBlock}>Explore All Beans ...</h1>
      <div className={styles.beansContainer}>
        {beansData.map((data) => (
          <Link
            key={data.beanId}
            to={`/Jelly-Belly/bean/${data.beanId}`}
            className={styles.wrapper}
            style={{
              background: data.backgroundColor,
            }}
          >
            <img src={data.imageUrl} alt={data.flavorName} />
            <h3>{data.flavorName}</h3>
            <p>{data.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BeansPage;
