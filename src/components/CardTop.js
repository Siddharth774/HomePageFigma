import React from "react";
import "./CardTop.scss";
import laptopImg from "../assets/laptop.png";

const CardTop = ({ data }) => {
  return (
    <section className="card-section">
      {data.tag ? (
        <div className="card-tag ">
          <p className="flex justify-center item-center">
            <span className="mr-2">{data.bestTag.icon}</span>
            {data.bestTag.name}
          </p>
        </div>
      ) : (
        ""
      )}
      <div className="card-rate ">
        <span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.91878 3.66546C5.47444 2.04501 7.62526 1.04163 9.9999 1.04163C12.3745 1.04163 14.5253 2.04501 16.081 3.66546C17.6366 5.28593 18.5999 7.52638 18.5999 9.99996C18.5999 12.4735 17.6366 14.714 16.081 16.3345C14.5253 17.9549 12.3745 18.9583 9.9999 18.9583C7.62526 18.9583 5.47444 17.9549 3.91878 16.3345C2.36315 14.714 1.3999 12.4735 1.3999 9.99996C1.3999 7.52638 2.36315 5.28593 3.91878 3.66546ZM9.9999 2.29163C7.9563 2.29163 6.10713 3.15373 4.76731 4.54934C3.42751 5.94499 2.5999 7.87121 2.5999 9.99996C2.5999 12.1287 3.42752 14.055 4.76731 15.4505C6.10713 16.8462 7.9563 17.7083 9.9999 17.7083C12.0435 17.7083 13.8927 16.8462 15.2325 15.4505C16.5723 14.055 17.3999 12.1287 17.3999 9.99996C17.3999 7.87121 16.5723 5.94498 15.2325 4.54934C13.8927 3.15373 12.0435 2.29163 9.9999 2.29163Z"
              fill="#626E79"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10 4.58337C10.5523 4.58337 11 5.04975 11 5.62504C11 6.20033 10.5523 6.66671 10 6.66671C9.44776 6.66671 9 6.20033 9 5.62504C9 5.04975 9.44776 4.58337 10 4.58337Z"
              fill="#626E79"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.7998 8.33325C8.7998 7.98807 9.06844 7.70825 9.3998 7.70825H10.1998C10.5312 7.70825 10.7998 7.98807 10.7998 8.33325V14.1666C10.7998 14.5118 10.5312 14.7916 10.1998 14.7916C9.86844 14.7916 9.5998 14.5118 9.5998 14.1666V8.95827H9.3998C9.06844 8.95827 8.7998 8.67844 8.7998 8.33325Z"
              fill="#626E79"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.2002 14.1666C8.2002 13.8215 8.46884 13.5416 8.8002 13.5416H11.6002C11.9316 13.5416 12.2002 13.8215 12.2002 14.1666C12.2002 14.5118 11.9316 14.7916 11.6002 14.7916H8.8002C8.46884 14.7916 8.2002 14.5118 8.2002 14.1666Z"
              fill="#626E79"
            />
          </svg>
        </span>
        <p className="text-4xl mt-5 rate-text">{data.rateTag.rate}</p>
        <p className="mt-2 mb-2">{data.rateTag.grade}</p>
        <p>{data.rateTag.star}</p>
      </div>
      <div className={data.border ? "card-num-border card-num " : "card-num "}>
        <p>{data.id}</p>
      </div>
      <div className="card-view">
        <p>View</p>
      </div>
      <div className="card">
        <div className="card-left">
          <div className="card-img">
            <img src={laptopImg} alt="img" />
            <p>{data.name}</p>
          </div>
        </div>
        <div className="card-right">
          <div>
            <span className="span1">{data.title.heading} </span>
            <span>{data.title.content}</span>
          </div>
          <div className="main">
            {data.mainHighlights.flag ? (
              ""
            ) : (
              <p className="offer-tag">26% off</p>
            )}
            <p className="highlights">Main highlights</p>
            {data.mainHighlights.flag ? (
              <div className="mb-10">
                <p className="content">{data.mainHighlights.content}</p>
              </div>
            ) : (
              <div className="mb-3">
                <div className="list-highlights">
                  <p>
                    <span>{data.mainHighlights.content.list1.item1.no}</span>
                    <span>{data.mainHighlights.content.list1.item1.name}</span>
                  </p>
                  <p>
                    <span>{data.mainHighlights.content.list1.item2.no}</span>
                    <span>{data.mainHighlights.content.list1.item2.name}</span>
                  </p>
                  <p>
                    <span>{data.mainHighlights.content.list1.item3.no}</span>
                    <span>{data.mainHighlights.content.list1.item3.name}</span>
                  </p>
                </div>
                <div className="mt-3">
                  <p className="doc-heading">Why we love it</p>
                  <div className="document">
                    <p className="flex">
                      <span>{data.mainHighlights.content.list2.item1.svg}</span>
                      <span>
                        {data.mainHighlights.content.list2.item1.name}
                      </span>
                    </p>
                    <p className="flex">
                      <span>{data.mainHighlights.content.list2.item2.svg}</span>
                      <span>
                        {data.mainHighlights.content.list2.item2.name}
                      </span>
                    </p>
                    <p className="flex">
                      <span>{data.mainHighlights.content.list2.item3.svg}</span>
                      <span>
                        {data.mainHighlights.content.list2.item3.name}
                      </span>
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            )}
          </div>
          <div className="show-more">
            <span>Show more</span>
            {data.arrow ? (
              <span className="svg">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.98043 5.64645C4.17569 5.45118 4.49228 5.45118 4.68754 5.64645L8.33398 9.29289L11.9804 5.64645C12.1757 5.45118 12.4923 5.45118 12.6875 5.64645C12.8828 5.84171 12.8828 6.15829 12.6875 6.35355L8.68754 10.3536C8.49228 10.5488 8.17569 10.5488 7.98043 10.3536L3.98043 6.35355C3.78517 6.15829 3.78517 5.84171 3.98043 5.64645Z"
                    fill="#1B88F4"
                  />
                </svg>
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardTop;
