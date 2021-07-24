import { FC, ReactElement, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";

import UserListHeader from "components/UserListHeader/UserListHeader";
import ListItem from "components/ListItem/ListItem";
import { GET_USERS, IUserItem, IGetUsersData, IGetUsersVar } from "GraphQL/queries";
import Loading from "components/Loading/Loading";

const UserList: FC<RouteComponentProps> = (): ReactElement => {
  const [users, setUsers] = useState<IUserItem[]>([]);
  const [page, setPage] = useState<number>(0);
  const [getUsers, { error, data }] = useLazyQuery<IGetUsersData, IGetUsersVar>(GET_USERS, {
    variables: {
      page: page,
      limit: 20,
    },
    onCompleted: (data) => {
      setUsers([...users, ...data.users.data]);
    },
  });

  const next = async () => {
    await getUsers({
      variables: {
        page: page,
        limit: 20,
      },
    });
  };

  useEffect(() => {
    setPage(page + 1);
  }, [users]);

  useEffect(() => {
    console.log("error:", error);
  }, [error]);

  return (
    <div data-testid="userList">
      <UserListHeader />
      {/* user list - start */}
      <InfiniteScroll
        className="w-full min-h-500"
        dataLength={users.length}
        next={() => users !== [] && next()}
        hasMore={data ? data.users.offset <= data.users.total : true}
        loader={<Loading />}
        endMessage={<p className="text-center text-white my-3 font-sans font-bold">Yay! You have seen it all</p>}
      >
        {users.map((user: any) => (
          <div key={user.id} className="h-20">
            <ListItem {...user} />
          </div>
        ))}
      </InfiniteScroll>
      {/* user list - end */}
    </div>
  );
};

export default UserList;
