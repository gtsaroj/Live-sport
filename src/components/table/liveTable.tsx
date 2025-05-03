"use client";

import { Table } from "@/common";
import { useState } from "react";

import Link from "next/link";
import { FaLink } from "react-icons/fa";
import { OptimizeImg } from "@/helpers";

// Define the Team type
interface Team {
  name: string;
  goal: string;
  image: string;
}

// Define the Live Match type
interface LiveMatch {
  id: string;
  Team1: Team;
  Team2: Team;
  matchLink: string;
  LiveLink: string;
}

function LiveMatchesTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Create the columns configuration
  const Columns: Common.ColumnProps[] = [
    {
      fieldName: "ID",
      colStyle: { width: "100px", justifyContent: "start", textAlign: "start" },
      render: (item: LiveMatch) => (
        <div className="w-[100px] relative cursor-pointer group/id text-start">
          #{item.id.substring(0, 8)}
          <div className="top-[-27px] group-hover/id:visible opacity-0 group-hover/id:opacity-[100] duration-150 invisible left-[-30px] absolute bg-[var(--light-foreground)] p-1 rounded shadow">
            {item.id}
          </div>
        </div>
      ),
    },
    {
      fieldName: "Team 1",
      colStyle: { width: "250px", justifyContent: "start", textAlign: "start" },
      render: (item: LiveMatch) => (
        <div className="w-[250px] text-[var(--dark-text)] flex items-center justify-start gap-3">
          <div className="w-[40px] h-[40px] flex-shrink-0">
            <OptimizeImg
              className="w-full h-full rounded-full object-cover"
              highResSrc={
                item.Team1.image || "/placeholder.svg?height=40&width=40"
              }
              alt={item.Team1.name}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium truncate">{item.Team1.name}</span>
            <span className="text-sm text-muted-foreground">
              Goals: {item.Team1.goal}
            </span>
          </div>
        </div>
      ),
    },
    {
      fieldName: "Team 2",
      colStyle: { width: "250px", justifyContent: "start", textAlign: "start" },
      render: (item: LiveMatch) => (
        <div className="w-[250px] text-[var(--dark-text)] flex items-center justify-start gap-3">
          <div className="w-[40px] h-[40px] flex-shrink-0">
            <OptimizeImg
              className="w-full h-full rounded-full object-cover"
              highResSrc={
                item.Team2.image || "/placeholder.svg?height=40&width=40"
              }
              alt={item.Team2.name}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-medium truncate">{item.Team2.name}</span>
            <span className="text-sm text-muted-foreground">
              Goals: {item.Team2.goal}
            </span>
          </div>
        </div>
      ),
    },
    {
      fieldName: "Match Link",
      colStyle: { width: "150px", justifyContent: "start", textAlign: "start" },
      render: (item: LiveMatch) => (
        <div className="w-[150px] text-[var(--dark-text)]">
          <Link
            href={item.matchLink}
            target="_blank"
            className="flex items-center gap-2 text-primary hover:underline"
          >
            <FaLink className="h-4 w-4" />
            <span>Match Link</span>
          </Link>
        </div>
      ),
    },
    {
      fieldName: "Ads Link",
      colStyle: { width: "120px", justifyContent: "start", textAlign: "start" },
      render: (item: LiveMatch) => (
        <div className="w-[120px] text-[var(--dark-text)]">
          <Link
            href={item.LiveLink}
            target="_blank"
            className="flex items-center gap-2 text-red-500 hover:underline"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <span>Ads Live</span>
          </Link>
        </div>
      ),
    },
  ];

  // Sample data
  const sampleData: LiveMatch[] = [
    {
      id: "1234567890abcdef",
      Team1: {
        name: "Manchester United",
        goal: "2",
        image: "/placeholder.svg?height=40&width=40",
      },
      Team2: {
        name: "Liverpool",
        goal: "1",
        image: "/placeholder.svg?height=40&width=40",
      },
      matchLink: "https://example.com/match/1",
      LiveLink: "https://example.com/live/1",
    },
    {
      id: "abcdef1234567890",
      Team1: {
        name: "Barcelona",
        goal: "3",
        image: "/placeholder.svg?height=40&width=40",
      },
      Team2: {
        name: "Real Madrid",
        goal: "2",
        image: "/placeholder.svg?height=40&width=40",
      },
      matchLink: "https://example.com/match/2",
      LiveLink: "https://example.com/live/2",
    },
    {
      id: "09876543211234",
      Team1: {
        name: "Bayern Munich",
        goal: "4",
        image: "/placeholder.svg?height=40&width=40",
      },
      Team2: {
        name: "Borussia Dortmund",
        goal: "1",
        image: "/placeholder.svg?height=40&width=40",
      },
      matchLink: "https://example.com/match/3",
      LiveLink: "https://example.com/live/3",
    },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageDirection = (direction: "next" | "prev") => {
    if (
      direction === "next" &&
      currentPage < Math.ceil(sampleData.length / 5)
    ) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleEdit = (id: string) => {
    console.log("Edit item with ID:", id);
    // Implement your edit logic here
  };

  const handleDelete = (id: string) => {
    console.log("Delete item with ID:", id);
    // Implement your delete logic here
  };

  const handleCheck = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedItems([...selectedItems, id]);
    } else {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Table
        data={sampleData}
        columns={Columns}
        loading={false}
        totalData={sampleData.length}
        pagination={{ perPage: 5, currentPage }}
        onPageChange={handlePageChange}
        handlePageDirection={handlePageDirection}
        selectedData={selectedItems}
        actions={{
          editFn: handleEdit,
          deleteFn: handleDelete,
          checkFn: handleCheck,
        }}
      />
    </div>
  );
}

export { LiveMatchesTable };
