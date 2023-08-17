'use client'

import css from "../../../styles/Post.module.css";

export default function Post() {
    return (
        <>
            <div className={css.postContainer}>
                <h1 className={css.postTitle}>(20230817) 3D Gaussian Splatting on Modal Labs</h1>
                <p className={css.postContent}>Though yesterday I think I graduated from Kindergarten in terms of Blender skills, I would very much like an easier way to create 3D assets and scenes. There is amazing paper that came out literally days ago, <a className={css.a} href="https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/">3D Gaussian Splatting for Real-Time Radiance Fields</a>, which is not only a huge improvement on the previous state-of-the-art but is also visually stunning, and seemingly good-enough-to-use and well-packaged.</p>
                <p className={css.postContent}>My company has a bunch of GPUs but I personally do not, and 24 GB of vRAM (which is required for this model) is a strong requirement. I decided to use <a className={css.a} href="https://modal.com/">Modal Lab's</a> GPU infrastructure, which I've had previous positive experiences with.</p>
            </div>
        </>
    )
}