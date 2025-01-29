import {
  FaHotel,
  FaHome,
  FaHouseUser,
  FaSwimmingPool,
  FaCampground,
  FaMountain,
  FaTractor,
  FaUmbrellaBeach,
} from "react-icons/fa";

export const stayOptions = [
  {id:1, title: "Hotel", icon: () => <FaHotel />, color: "#8B0000" },
  {id:2, title: "Homestay", icon: () => <FaHome />, color: "#FFD700" },
  {id:3, title: "Lodge", icon: () => <FaHouseUser />, color: "#006400" },
  {id:4, title: "Resort", icon: () => <FaSwimmingPool />, color: "#1E90FF" },
  {id:5, title: "Villa", icon: () => <FaUmbrellaBeach />, color: "#191970" },
  {id:6, title: "Camping Site", icon: () => <FaCampground />, color: "#8B0000" },
  {id:7, title: "Mountain Cabin", icon: () => <FaMountain />, color: "#006400" },
  {id:8, title: "Farm Stay", icon: () => <FaTractor />, color: "#FFD700" },
];

export const stays = [
    {
      id: 0,
      type: "Hotel",
      title: "Daju vai lodge",
      location: "Thangpal, Bhotang",
      contact: "9812345678",
      price: 3000,
      image: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
        },
      ],
    },
    {
      id: 1,
      type: "Villa",
      title: "Rambahadur ko bangla",
      location: "Bhotang, Thangpal",
      contact: "9812345678",
      price: 1499,
      image: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
        },
      ],
    },
    {
      id: 2,
      type: "Resort",
      title: "Homestay Near Tsegro ri",
      location: "Tsegro, Thangpal",
      contact: "9812345678",
      price: 1000,
      image: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
        },
      ],
    },
    {
      id: 3,
      type: "Hotel",
      title: "Lake Side Homestay",
      location: "Tsegro, Thangpal",
      contact: "9812345678",
      price: 1799,
      image: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
        },
      ],
    },
    {
      id: 4,
      type: "Hotel",
      title: "Lake Side Homestay",
      location: "Tsegro, Thangpal",
      contact: "9812345678",
      price: 1799,
      image: [
        {
          id: 1,
          url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 2,
          url: "https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60",
        },
        {
          id: 3,
          url: "https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80",
        },
        {
          id: 4,
          url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
        },
      ],
    }
  ];
  