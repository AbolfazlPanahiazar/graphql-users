import { FC, ReactElement, useEffect, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroll-component";

import UserListHeader from "components/UserListHeader/UserListHeader";
import ListItem from "components/ListItem/ListItem";
import { GET_USERS, IUserItem, IGetUsersData, IGetUsersVar } from "GraphQL/queries";

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
    data && console.log(data);
  }, [data]);

  useEffect(() => {
    console.log("users:", users);
    setPage(page + 1);
  }, [users]);

  useEffect(() => {
    console.log("error", error);
  }, [error]);

  return (
    <div>
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

const Loading: FC = (): ReactElement => {
  return (
    <div className="border border-blue-300 shadow rounded-md p-4 my-3 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-blue-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-blue-400 rounded w-3/4"></div>
          <div className="h-4 bg-blue-400 rounded w-3/4"></div>
        </div>
      </div>
    </div>
  );
};
