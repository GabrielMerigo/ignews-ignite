import { NextApiRequest, NextApiResponse } from 'next';


export default function(request: NextApiRequest, response: NextApiResponse){
  const users = [
    { id: 1, name: 'Gabriel'},
    { id: 2, name: 'Gabriel'},
    { id: 1, name: 'Gabriel'}
  ];

  return response.json(users);
}