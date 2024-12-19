import axios, { AxiosResponse } from "axios";
import { FC, useEffect, useState } from "react";
import { History as HistoryType } from "../../../types/Beans.ts";
import { Loader } from "../../Loader/Loader.tsx";
import styles from "../CombinationsPage/styles.module.css";

type ApiResponse = {
  items: HistoryType[];
};

const History: FC = () => {
  const [beansData, setBeansData] = useState<HistoryType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response: AxiosResponse<ApiResponse> = await axios.get(
          "https://jellybellywikiapi.onrender.com/api/mileStones",
          { params: { pageSize: 23 } },
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
      <h1 className={styles.titleBlock}>History...</h1>
      <div className={styles.container}>
        {beansData.map((item) => (
          <div className={styles.item} key={`history_item_${item.mileStoneId}`}>
            <h3>{item.year}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default History;
