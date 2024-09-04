import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

interface User {
  id: number;
  name: string;
  postCount: number;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the users
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await userResponse.json();

        // Fetch the posts
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const postsData = await postResponse.json();

        // Count posts for each user
        const userWithPostCount = usersData.map((user: any) => {
          const postCount = postsData.filter((post: any) => post.userId === user.id).length;
          return { id: user.id, name: user.name, postCount };
        });

        setUsers(userWithPostCount);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2}>
      {users.map(user => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                {user.name}
              </Typography>
              <Typography color="textSecondary">
                Posts: {user.postCount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default UserList;
