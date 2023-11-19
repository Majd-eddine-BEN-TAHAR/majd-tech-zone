export const prerender = true;
import { json } from '@sveltejs/kit';

const userDataArray = [
	{ id: 1, name: 'John', age: 25 },
	{ id: 2, name: 'Alice', age: 30 },
	{ id: 3, name: 'Bob', age: 22 },
	{ id: 4, name: 'Andrew', age: 21 },
	{ id: 5, name: 'Linda', age: 32 },
	{ id: 6, name: 'Sam', age: 28 },
	{ id: 7, name: 'Kate', age: 27 },
	{ id: 8, name: 'Emma', age: 26 },
	{ id: 9, name: 'Alex', age: 24 },
	{ id: 10, name: 'Mary', age: 29 }
];

// Function to get user data by ID
function getUserDataById(userId: any) {
	// Find the user data with the specified ID
	const userData = userDataArray.find((user) => user.id === userId);

	// Return the user data if found, otherwise return a message
	return userData ? userData : 'User not found';
}

export function GET({ params }: any) {
	// write function that accepts a query param and returns specific data
	const id = Number(params.pagination);
	const data = getUserDataById(id);
	return json({ data });
}
