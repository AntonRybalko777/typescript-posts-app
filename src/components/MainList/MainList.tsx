import { useSelector } from "react-redux";
import { selectPosts } from "../../redux/selectors";
import { StyledHeader, StyledLi } from "./MainList.styled";

type Post = { body: string; id: number; title: string; userId: number };

export const MainList = () => {
  const posts = useSelector(selectPosts);
  return (
    <div>
      <StyledHeader>Main page</StyledHeader>
      <ul>
        {posts.map((post: Post) => (
          <StyledLi key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </StyledLi>
        ))}
      </ul>
    </div>
  );
};
