import React from "react";

const commentsData = [
  {
    name: "Janaki",
    text: "Namaste React is a course which helps us to dive deep into core concepts",
    replies: [],
  },
  {
    name: "Janaki",
    text: "Namaste React is a course which helps us to dive deep into core concepts",
    replies: [
      {
        name: "Janaki",
        text: "Namaste React is a course which helps us to dive deep into core concepts",
        replies: [
          {
            name: "Janaki",
            text: "Namaste React is a course which helps us to dive deep into core concepts",
            replies: [
              {
                name: "Janaki",
                text: "Namaste React is a course which helps us to dive deep into core concepts",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Janaki",
    text: "Namaste React is a course which helps us to dive deep into core concepts",
    replies: [
      {
        name: "Janaki",
        text: "Namaste React is a course which helps us to dive deep into core concepts",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;

  return (
    <div className="p-2 flex m-2 bg-gray-200 shadow-sm">
      <img
        className="w-8 h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div>
        <div className="mx-2">
          <div>{name}</div>
          <div>{text}</div>
          <CommentsList comments={data.replies}/>
        </div>
      </div>
    </div>
  );
};

const CommentsList=({comments})=>{
  //never use index as key
  return comments.map((comment,index) => (
  <Comment key={index} data={comment}/>
  ));
}

const CommentsContainer = () => {
  return (
    <div>
      <div className="font-bold">Comments</div>
      <CommentsList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
