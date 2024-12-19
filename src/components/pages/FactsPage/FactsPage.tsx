import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Fact } from "../../../types/Beans.ts";
import { Loader } from "../../Loader/Loader.tsx";
import styles from "./styles.module.css";

type ApiResponse = {
  items: Fact[];
};

const Facts: React.FC = () => {
  const [beansData, setBeansData] = useState<Fact[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(
          "https://jellybellywikiapi.onrender.com/api/facts",
          { params: { pageSize: 54 } },
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
      <h1>Facts...</h1>
      <div className={styles.containerFacts}>
        {beansData.map((item) => (
          <div className={styles.itemFacts}>
            <h3 className={styles.titleFacts}>{item.title}</h3>
            <p className={styles.descriptionFacts}>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Facts;
