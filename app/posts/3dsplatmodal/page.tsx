'use client'

import css from "../../../styles/Post.module.css";
import Editor from '@monaco-editor/react';

import * as U from "../../../components/PostUtils";
import Head from "next/head";

export default function Post() {
    return (
        <>
            <Head>
                <title>3D Gaussian Splatting on Modal Labs</title>
            </Head>
            <U.HomeButton />
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>3D Gaussian Splatting on Modal Labs</h1>
                <p className={css.postContent}>Though yesterday I think I graduated from Kindergarten in terms of Blender skills, I would very much like an easier way to create 3D assets and scenes. There is amazing paper that came out literally days ago, <a className={css.a} href="https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/">3D Gaussian Splatting for Real-Time Radiance Fields</a>, which is not only a huge improvement on the previous state-of-the-art but is also visually stunning, and seemingly good-enough-to-use and well-packaged.</p>
                <p className={css.postContent}>My company has a bunch of GPUs but I personally do not, and 24 GB of vRAM (which is required for this model) is a strong requirement. I decided to use <a className={css.a} href="https://modal.com/">Modal Lab's</a> GPU infrastructure, which I've had previous positive experiences with.</p>
                <p className={css.postContent}>I ran into a few issues, but the Modal Labs team was very responsive and helpful. Here is the Image setup. This will definitely be a multi-part project so the rest will have to follow later</p>
                <Editor
                    height="800px"
                    language="python"
                    value={`from modal import Image, Stub, method

stub = Stub("3dgausssplat")

image = (
    Image.from_dockerhub(
        "nvidia/cuda:11.6.2-devel-ubuntu20.04",
        setup_dockerfile_commands=[
            "RUN apt-get update",
            "RUN apt-get install -y python3 python3-pip python-is-python3",
        ],
    )
    .apt_install("wget", "git")
    .run_commands("git clone https://github.com/graphdeco-inria/gaussian-splatting --recursive")
    .pip_install("tqdm")
    .pip_install("torch==1.12.1", index_url="https://download.pytorch.org/whl/cu116")
    .pip_install("torchvision==0.13.1")
    .pip_install("torchaudio==0.12.1")
    .pip_install("plyfile==0.8.1")
    .apt_install("gcc", "g++")
    .env({"CONDA_OVERRIDE_CUDA": "11.6",
          "TORCH_CUDA_ARCH_LIST": "8.6+PTX"
          })
    .run_commands('TORCH_CUDA_ARCH_LIST="8.6+PTX" python -m pip install ./gaussian-splatting/submodules/diff-gaussian-rasterization', gpu="any")
    .run_commands('TORCH_CUDA_ARCH_LIST="8.6+PTX" python -m pip install ./gaussian-splatting/submodules/simple-knn', gpu="any")
)`}
                ></Editor>
            </div>
        </>
    )
}