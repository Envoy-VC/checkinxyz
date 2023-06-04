export const WALLET_CONNECT_PROJECT_ID =
	process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '';

export const ACCOUNT_FACTORY_ADDRESS =
	'0x3eEdFd9FAAe93576625ce8A59f316b0ed4dFf150';

export const TW_API_KEY = process.env.NEXT_PUBLIC_TW_API_KEY || '';

export const PAPER_API_KEY = process.env.NEXT_PUBLIC_PAPER_API_KEY || '';

export const GUESTBOOK_CONTRACT_ADDRESS =
	'0x6Bf13132D8E8f74F3B9bA253B15B3f88EdDD6942';

export const ABI = [
	{
		inputs: [
			{
				internalType: 'string',
				name: '_uri',
				type: 'string',
			},
		],
		name: 'createEntry',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [],
		name: 'deleteGuesbook',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'previousOwner',
				type: 'address',
			},
			{
				indexed: true,
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'OwnershipTransferred',
		type: 'event',
	},
	{
		inputs: [],
		name: 'renounceOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'address',
				name: 'newOwner',
				type: 'address',
			},
		],
		name: 'transferOwnership',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: '',
				type: 'uint256',
			},
		],
		name: 'entries',
		outputs: [
			{
				internalType: 'string',
				name: '',
				type: 'string',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'getEntries',
		outputs: [
			{
				internalType: 'string[]',
				name: '',
				type: 'string[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'owner',
		outputs: [
			{
				internalType: 'address',
				name: '',
				type: 'address',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
];
