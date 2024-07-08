import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const PostDetails = () => {
  return (
    <section className="container mx-auto mt-20 rounded-md bg-white p-3 lg:w-[50%] lg:p-10">
      <div className="">
        <div className="justify-between gap-5 md:flex">
          <PostAuthor />
          <div className="mt-5 flex gap-2">
            <Button
              component={Link}
              to={`/posts/werwer/edit`}
              variant="contained"
              color="primary"
              startIcon={<EditIcon />}
              sx={{ textTransform: "none" }}
            >
              Edit
            </Button>
            <Button
              component={Link}
              to={`/posts/werwer/delete`}
              variant="contained"
              color="error"
              startIcon={<DeleteIcon />}
              sx={{ textTransform: "none" }}
            >
              Delete
            </Button>
          </div>
        </div>
        <h1 className="mt-10 text-2xl font-bold">This is the first blog</h1>
        <img
          src="https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg"
          alt=""
          className="mt-7 w-[100vw]"
        />
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta
          architecto voluptatibus hic non sit aliquid dolorum earum? Earum
          tempora corrupti maxime, itaque consequuntur fugit magni totam
          doloribus ab veritatis voluptates natus quibusdam neque dignissimos
          corporis nihil, cupiditate a. Delectus, quasi repellendus minima iste
          voluptatem accusantium hic dignissimos debitis velit ullam sed, quia
          quas voluptatibus reprehenderit expedita? Commodi aut iusto eligendi
          laborum eveniet accusamus voluptatem culpa itaque obcaecati porro,
          optio consectetur, sequi quia beatae perspiciatis blanditiis
          accusantium nostrum. Distinctio, dolor. Quaerat quisquam fugit placeat
          doloremque ratione, assumenda dolores cupiditate doloribus. In
          doloremque iste perferendis suscipit ut, inventore nihil dolore, ab
          temporibus tempora optio? Repellat neque odit eos accusamus tempore
          eligendi nesciunt nihil totam maiores? In debitis aliquid nisi fugit
          excepturi est sed id, repudiandae autem. Repudiandae, quo voluptatem.
          Repudiandae sed laboriosam voluptatum. Ullam minus adipisci
          necessitatibus, ex voluptate, soluta, ipsum numquam cupiditate
          corporis eos deserunt ipsam. Laudantium tempora suscipit tempore
          magnam pariatur, incidunt natus exercitationem, quod quae harum non ad
          ratione recusandae molestiae quam earum amet ipsa qui necessitatibus
          quasi consequatur cupiditate perferendis facere excepturi. Eum, est?
          Iusto, tempora veritatis architecto dolorem molestias eveniet
          voluptatibus ad veniam laboriosam distinctio deleniti! Esse totam
          inventore, adipisci sapiente voluptatum earum voluptatem. Ullam,
          sequi! Inventore.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
          perferendis quisquam, aspernatur asperiores voluptatum soluta ea
          doloremque sint deserunt ipsam sed fuga, nulla laborum id, sapiente
          optio? Alias, laborum quod earum incidunt, consequatur voluptas
          consequuntur minima sit magnam quaerat perferendis doloribus nobis
          labore dolores doloremque dolorem cupiditate officiis iure
          praesentium, deserunt fugiat necessitatibus omnis amet! Nulla
          inventore harum recusandae modi? Delectus sed labore eveniet aliquid
          animi ipsa laudantium doloribus non facilis eos beatae reprehenderit
          tenetur fuga, placeat totam nulla nam eius! Rem, labore. Quisquam
          necessitatibus itaque architecto doloremque quo vero at, voluptas,
          minima blanditiis cumque hic nihil alias! Asperiores cum fuga nemo
          quae, ipsam fugit voluptatem aliquam. Aspernatur quasi a laudantium
          autem minima repellat harum natus ad officia dolore? Omnis esse
          nesciunt repellendus delectus vitae sed aut facere necessitatibus
          accusantium ut molestias non quia nam a corrupti cupiditate doloribus
          rerum, libero sit repellat maxime animi at quo adipisci. Veritatis,
          deleniti, numquam suscipit iusto quibusdam commodi alias iste magni
          voluptatibus fuga qui, soluta iure earum dolores ullam exercitationem
          adipisci expedita natus. Aliquid, quibusdam facere! Ex perferendis
          architecto culpa voluptates odio commodi, assumenda vero? Voluptates
          consequuntur sequi impedit animi veritatis sapiente corrupti
          molestiae, mollitia quidem hic unde, eligendi consectetur. Aut,
          accusantium quos!
        </p>
      </div>
    </section>
  );
};

export default PostDetails;
