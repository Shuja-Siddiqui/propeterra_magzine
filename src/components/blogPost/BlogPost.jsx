import React, { useContext } from "react";
import { TiSocialFacebook, TiSocialInstagram } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import MyContext from "../../context/MyContext";
import { formatDate } from "../../utils";

const BlogPost = () => {
  const { state } = useContext(MyContext);
  const data = state;
  return (
    <article className="type-post">
      <div className="entry-content">
        <div className="text-center mt-[27px]">
          <h5
            className="text-blog-description"
            style={{
              fontSize: "14px",
              margin: "0 0 10px",
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
          >
            {data?.category?.toUpperCase()}
          </h5>
          <h3
            className="text-[25px] leading-[1.25] font-bold text-blog-title"
            style={{
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
          >
            {data?.title}
          </h3>
          <p className="card-description">{data?.description}</p>
          <div className="w-full flex justify-center items-center mt-[10px]">
            <div className="w-[5%] border-b-2 border-light-grey"></div>
          </div>
          <div
            style={{
              animationDuration: "0.6",
              textTransform: "uppercase",
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
            href={data?.link}
            className="text-blog-title text-[14px] leading-[2] font-normal mt-2"
          >
            <span className="byline ">
              by{" "}
              <span href="#" title="Indesign">
                {data?.country + ","}
              </span>
            </span>
            <span className="post-date ml-2">{formatDate(data?.date)}</span>
          </div>
        </div>
        {/* Para */}
        <p
          style={{
            hyphens: "auto",
            fontFamily: "Retina, Arial, Helvetica, sans-serif",
          }}
          className="text-blog-description font-light leading-[1.7] text-[16px] mt-[10px]"
        >
          These cases are perfectly simple and easy to distinguish. In a free
          hour, when our power of choice is untrammelled and when nothing
          prevents our being able to do what we like best, every pleasure is to
          be welcomed and every pain avoided. But in certain circumstances and
          owing to the claims of duty or the obligations of business it will
          frequently occur that pleasures have to be repudiated and annoyances
          accepted. The wise man therefore always holds in these matters to this
          principle of selection. But I must explain to you how all this
          mistaken idea of denouncing pleasure and praising pain was born and I
          will give you a complete account of the system.
        </p>

        {/* Child Container Para */}
        <div className="w-full my-[4%]">
          <blockquote>
            <h3
              className="text-[25px] leading-[1.25] font-bold xl:text-start lg:text-start md:text-start sm:text-center xs:text-center xss:text-center"
              style={{
                fontFamily:
                  "Escrow Condensed, Alternate Times New Roman, serif",
              }}
            >
              “To live is the rarest thing in the world. Most people exist, that
              is all.”
            </h3>

            <p
              style={{
                fontWeight: "bold",
                lineHeight: "1.875",
                fontFamily:
                  "Escrow Condensed, Alternate Times New Roman, serif",
              }}
              className="text-center mt-2 text-blog-para text-[16px]"
            >
              Oscar Wilde
            </p>
          </blockquote>
        </div>
        {/* Para */}
        <p
          style={{
            hyphens: "auto",
            fontFamily: "Retina, Arial, Helvetica, sans-serif",
          }}
          className="text-blog-description font-light leading-[1.7] text-[16px] mt-[10px]"
        >
          Nor again is there anyone who loves or pursues or desires to obtain
          pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure. But I must explain to you how all this mistaken idea of
          denouncing pleasure and praising pain was born and I will give you a
          complete account of the system, and expound the actual teachings of
          the great explorer of the truth. But I must explain to you how all
          this mistaken idea of denouncing pleasure and praising pain was born
          and I will give you a complete account of the system, and expound the
          actual teachings of the great explorer of the truth, the
          master-builder of human happiness. No one rejects, dislikes, or avoids
          pleasure itself.
        </p>

        {/* Child Container Para */}
        <div className="w-full my-[4%]">
          <h4
            className="text-[24px] leading-[1.25] font-bold"
            style={{
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
          >
            More into summer fashion
          </h4>
          <p
            style={{
              hyphens: "auto",
              fontFamily: "Retina, Arial, Helvetica, sans-serif",
            }}
            className="text-blog-description font-light leading-[1.7] text-[16px] mt-[10px]"
          >
            Denouncing pleasure and praising pain was born and I will give you a
            complete account of the system, and expound the actual teachings of
            the great explorer of the truth, the master-builder of human
            happiness. No one rejects, dislikes, or avoids pleasure itself,
            because it is pleasure.
          </p>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            style={{ width: "100%" }}
            src="http://placehold.it/770x450"
            alt="Post Image"
          />
          <figcaption
            className="text-center my-[2%]"
            style={{
              fontFamily: "Escrow Condensed, Alternate Times New Roman, serif",
            }}
          >
            Summer heat
          </figcaption>
        </div>

        {/* Para */}
        <p
          style={{
            hyphens: "auto",
            fontFamily: "Retina, Arial, Helvetica, sans-serif",
          }}
          className="text-blog-description font-light leading-[1.7] text-[16px] mt-[10px]"
        >
          Because it is pleasure, but because those who do not know how to
          pursue pleasure rationally encounter consequences that are extremely
          painful. Nor again is there anyone who loves or pursues or desires to
          obtain pain of itself, because it is pain, but because occasionally
          circumstances occur in which toil and pain can procure him some great
          pleasure. To take a trivial example, which of us ever undertakes
          laborious physical exercise.
        </p>

        {/* Social */}
        <div className="w-full flex xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xss:flex-col justify-between mt-[4%] xl:mb-[2%] lg:mb-[2%] md:mb-[2%] sm:mb-[4%] xs:mb-[4%] xss:mb-[4%] xl:gap-0 lg:gap-0 md:gap-0 sm:gap-4 xs:gap-4 xss:gap-4">
          <div className="xl:w-[30%] lg:w-[30%] md:w-[30%] sm:w-[80%] xs:w-[80%] xss:w-[80%] tags flex justify-between">
            <Link href="#" title="Fashion">
              # Fashion
            </Link>
            <Link href="#" title="Travel">
              # Travel
            </Link>
            <Link href="#" title="Nature">
              # Nature
            </Link>
          </div>

          <ul className="social flex xl:w-[10%] lg:w-[10%] md:w-[10%] sm:w-[30%] xs:w-[30%] xss:w-[30%] justify-between">
            <Link to={"https://www.facebook.com/propeterra"} target="_blank">
              <TiSocialFacebook size={18} className="" />
            </Link>
            <Link to={"https://twitter.com/propeterra"} target="_blank">
              <FaTwitter size={18} />
            </Link>
            <Link to={"https://www.instagram.com/propeterra/"} target="_blank">
              <TiSocialInstagram size={18} />
            </Link>
          </ul>
        </div>

        {/* Bottom Border */}
        <hr />
      </div>
    </article>
  );
};

export default BlogPost;
