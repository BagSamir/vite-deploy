import { useNavigate, useParams } from "react-router-dom";
import { useFetchPostByIdQuery } from '../../entities/posts';
import styles from './postPage.module.scss'


export const PostPage = () => {
  const { id } = useParams();
  const { data: post, isSuccess, isLoading } = useFetchPostByIdQuery(Number(id));
  const navigate = useNavigate();

  const buttonHandler = () => {
    navigate('/blog');
  };

  if (isLoading) return <h1>Загрузка данных...</h1>;
  if (!isSuccess) return <h1>Страница не существует!</h1>;

  return (
    <main className={styles.container}>
      <h1 className={styles.post_id}>№ {post.id}</h1>
      <h2 className={styles.post_title}>Title: {post.title}</h2>
      <p className={styles.post_text}>Text: {post.body}</p>
      <button className={styles.post_btn} onClick={buttonHandler}>Назад</button>
    </main>
  );
}