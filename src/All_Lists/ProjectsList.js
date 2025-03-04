import id_1 from "../assets/projects/id_1.png";
import id_2 from "../assets/projects/id_2.png";
import id_3 from "../assets/projects/id_3.jpg";
import id_4 from "../assets/projects/id_4.png";
import id_5 from "../assets/projects/id_5.png";
import id_6 from "../assets/projects/id_6.gif";
import id_7 from "../assets/projects/id_7.png";
import id_8 from "../assets/projects/id_8.png";
import id_9 from "../assets/projects/id_9.png";
import id_10 from "../assets/projects/id_10.png";
import id_11 from "../assets/projects/id_11.jpg";
import id_12 from "../assets/projects/id_12.png";
import id_13 from "../assets/projects/id_13.png";
import id_14 from "../assets/projects/id_14.jpg";
import id_15 from "../assets/projects/id_15.jpg";
import id_16 from "../assets/projects/id_16.jpg";
import id_17 from "../assets/projects/id_17.jpg";
import id_18 from "../assets/projects/id_18.png";   
import id_19 from "../assets/projects/id_19.png";   
import id_20 from "../assets/projects/id_20.png";   
import id_21 from "../assets/projects/id_21.png";   
import id_22 from "../assets/projects/id_22.png";   

const ProjectsList = [
    {
        "id": 1,
        "title": "Free-access open-source e-learning in comprehensive neurosurgery skills training",
        "authors": "Payal Jotwani, Vinkle Srivastav, Manjul Tripathi, Rama Chandra Deo, Britty Baby, Natesan Damodaran, Ramandeep Singh, Ashish Suri, Martin Bettag, Tara Sankar Roy, others",
        "booktitle": "Neurology India",
        "year": "2014",
        "github": "https://github.com/vinkle",
        "image": id_1,
        "arxiv": "https://www.researchgate.net/publication/265859540_Free-access_open-source_e-learning_in_comprehensive_neurosurgery_skills_training",
        "summary": "This paper discusses the development and implementation of a free-access, open-source e-learning platform for comprehensive neurosurgery skills training, aimed at enhancing education and accessibility in the field."  
    },
    {
        "id": 2,
        "title": "MVOR: A multi-view RGB-D operating room dataset for 2D and 3D human pose estimation",
        "authors": "Vinkle Srivastav, Thibaut Issenhuth, Abdolrahim Kadkhodamohammadi, Michel de Mathelin, Afshin Gangi, Nicolas Padoy",
        "booktitle": "MICCAI-LABELS workshop",
        "year": "2018",
        "github": "https://github.com/CAMMA-public/MVOR",
        "image": id_2,
        "arxiv": "https://arxiv.org/abs/1808.08180",
        "summary": "MVOR introduces a multi-view RGB-D dataset for 2D and 3D human pose estimation in operating rooms, providing a valuable resource for surgical computer vision research."
    },
    {
        "id": 3,
        "title": "Face detection in the operating room: Comparison of state-of-the-art methods and a self-supervised approach",
        "authors": "Thibaut Issenhuth, Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "International journal of computer assisted radiology and surgery",
        "year": "2019",
        "github": "https://github.com/CAMMA-public",
        "image": id_3,
        "arxiv": "https://arxiv.org/abs/1811.12296",
        "message": "Runner-up award in the bench-to-bedside category, IPCAI 2019",
        "summary": "This paper compares state-of-the-art face detection methods in the operating room and proposes a self-supervised approach to improve accuracy in challenging surgical environments."
    },
    {
        "id": 4,
        "title": "Human pose estimation on privacy-preserving low-resolution depth images",
        "authors": "Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "International conference on medical image computing and computer-assisted intervention(MICCAI)",
        "year": "2019",
        "github": "https://github.com/CAMMA-public/ORPose-Depth",
        "image": id_4,
        "arxiv": "https://arxiv.org/abs/2007.08340",
        "summary": "The study explores human pose estimation using low-resolution depth images while preserving privacy, offering a solution for applications in privacy-sensitive environments like operating rooms."
    },
    {
        "id": 5,
        "title": "Self-supervision on unlabelled or data for multi-person 2d/3d human pose estimation",
        "authors": "Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "International conference on medical image computing and computer-assisted intervention(MICCAI)",
        "year": "2020",
        "github": "https://github.com/CAMMA-public/ORPose-Color",
        "image": id_5,
        "arxiv": "https://arxiv.org/abs/2007.08354",
        "message": "Oral presentation at MICCAI 2020",
        "summary": "This work presents a self-supervised learning framework for multi-person 2D/3D human pose estimation, leveraging unlabelled data to reduce annotation costs."
    },
    {
        "id": 6,
        "title": "Neural and Deep Neural Networks Learning",
        "authors": "Deepak Alapatt, Pietro Mascagni, Vinkle Srivastav, Nicolas Padoy",
        "booktitle": "Artificial Intelligence in Surgery: Understanding the Role of AI in Surgical Practice",
        "year": "2021",
        "github": "https://github.com/CAMMA-public/ai4surgery",
        "image": id_6,
        "arxiv": "https://arxiv.org/pdf/2009.13411",
        "summary": "The book chapter introduces neural and deep neural network learning techniques to medical professionals."
    },
    {
        "id": 7,
        "title": "Neurosurgery apps: novel knowledge boosters",
        "authors": "Manjul Tripathi, Rama Chandra Deo, Vinkle Srivastav, BABY Britty, Ramandeep Singh, Natesan Damodaran, SURI Ashish",
        "booktitle": "Turkish Neurosurgery",
        "year": "2014",
        "github": "https://github.com/vinkle/Neurosurgery-Apps",
        "image": id_7,
        "arxiv": "https://pubmed.ncbi.nlm.nih.gov/25448196/",
        "summary": "This article reviews neurosurgery apps as novel tools for enhancing knowledge and skills in neurosurgery, highlighting their potential in medical education."  
    },
    {
        "id": 8,
        "title": "Dissecting self-supervised learning methods for surgical computer vision",
        "authors": "Sanat Ramesh, Vinkle Srivastav, Deepak Alapatt, Tong Yu, Aditya Murali, Luca Sestini, Chinedu Innocent Nwoye, Idris Hamoud, Saurav Sharma, Antoine Fleurentin, others",
        "booktitle": "Medical Image Analysis",
        "year": "2023",
        "github": "https://github.com/CAMMA-public/SelfSupSurg",
        "image": id_8,
        "arxiv": "https://arxiv.org/abs/2207.00449",
        "summary": "This paper provides a comprehensive analysis of self-supervised learning methods for surgical computer vision, highlighting their potential and challenges in the field."
    },
    {
        "id": 9,
        "title": "Unsupervised domain adaptation for clinician pose estimation and instance segmentation in the operating room",
        "authors": "Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "Medical Image Analysis",
        "year": "2022",
        "github": "https://github.com/CAMMA-public/HPE-AdaptOR",
        "image": id_9,
        "arxiv": "https://arxiv.org/abs/2108.11801",
        "youtube": "https://www.youtube.com/watch?v=gqwPu9-nfGs",
        "youtube_message": "Demo video",
        "summary": "This study proposes an unsupervised domain adaptation approach for clinician pose estimation and instance segmentation in operating rooms, addressing domain shift challenges."
    },
    {
        "id": 10,
        "title": "ST(OR)2 : Spatio-temporal object level reasoning for activity recognition in the operating room",
        "authors": "Idris Hamoud, Muhammad Abdullah Jamal, Vinkle Srivastav, Didier Mutter, Nicolas Padoy, Omid Mohareri",
        "booktitle": "Medical imaging with deep learning",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/SROR2",
        "image": id_10,
        "arxiv": "https://arxiv.org/abs/2312.12250",
        "summary": "ST(OR)2 introduces a spatio-temporal object-level reasoning framework for activity recognition in operating rooms, improving understanding of surgical workflows."
    },
    {
        "id": 11,
        "title": "Learning multi-modal representations by watching hundreds of surgical video lectures",
        "authors": "Kun Yuan, Vinkle Srivastav, Tong Yu, Joel L Lavanchy, Pietro Mascagni, Nassir Navab, Nicolas Padoy",
        "booktitle": "arXiv:2307.15220",
        "year": "2023",
        "github": "https://github.com/CAMMA-public/SurgVLP",
        "image": id_11,
        "arxiv": "https://arxiv.org/abs/2307.15220",
        "summary": "This paper introduces SurgVLP, a multi-modal learning method using surgical video lectures, combining vision and language without manual annotations. It aligns video and text embeddings via contrastive learning, enabling zero-shot adaptation to tasks like tool, phase, and triplet recognition. This demonstrates versatile, transferable representations for surgical video analysis."
    },
    {
        "id": 12,
        "title": "Jumpstarting Surgical Computer Vision",
        "authors": "Deepak Alapatt, Aditya Murali, Vinkle Srivastav, AI4SafeChole Consortium, Pietro Mascagni, Nicolas Padoy",
        "booktitle": "International conference on medical image computing and computer-assisted intervention(MICCAI)",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/ScalingSurgicalSSL",
        "image": id_12,
        "arxiv": "https://arxiv.org/abs/2312.05968",
        "summary": "The lack of large, annotated datasets is a major challenge in surgical data science, with Self-Supervised Learning (SSL) offering a solution by reducing reliance on labeled data. However, SSL's robustness to domain shifts and its downstream effectiveness depend heavily on pre-training dataset composition. Through extensive experimentation across diverse datasets, tasks, and settings, this work demonstrates the importance of dataset design for SSL, achieving state-of-the-art results on phase recognition benchmarks, with improvements of up to 2.2% on Cholec80 and 5.1% on AutoLaparo."
    },
    {
        "id": 13,
        "title": "Overcoming Dimensional Collapse in Self-supervised Contrastive Learning for Medical Image Segmentation",
        "authors": "Jamshid Hassanpour, Vinkle Srivastav, Didier Mutter, Nicolas Padoy",
        "booktitle": "IEEE International Symposium on Biomedical Imaging (ISBI)",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/med-moco",
        "image": id_13,
        "arxiv": "https://arxiv.org/abs/2402.14611",
        "summary": "The study addresses dimensional collapse in self-supervised contrastive learning for medical image segmentation, proposing solutions to improve model performance."
    },
    {
        "id": 14,
        "title": "SelfPose3d: Self-supervised Multi-person Multi-view 3d Pose Estimation",
        "authors": "Vinkle Srivastav, Keqi Chen, Nicolas Padoy",
        "booktitle": "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/SelfPose3d",
        "image": id_14,
        "arxiv": "https://arxiv.org/abs/2404.02041",
        "message": "Poster presentation at CVPR 2024",
        "youtube": "https://www.youtube.com/watch?v=GAqhmUIr2E8",
        "youtube_message": "Demo video",
        "summary": "This paper introduces SelfPose3d, a self-supervised method for 3D multi-person pose estimation from multi-view images, eliminating the need for 2D or 3D ground-truth poses. Using only multi-view images and pseudo 2D poses from an off-the-shelf estimator, it proposes two objectives: self-supervised 3D person localization and pose estimation, enhanced by an adaptive supervision attention mechanism to address pseudo-label inaccuracies. The approach achieves performance comparable to fully-supervised methods on benchmarks like Panoptic, Shelf, and Campus, demonstrating its effectiveness without labeled data."
    },
    {
        "id": 15,
        "title": "HECVL: Hierarchical video-language pretraining for zero-shot surgical phase recognition",
        "authors": "Kun Yuan, Vinkle Srivastav, Nassir Navab, Nicolas Padoy",
        "booktitle": "International conference on medical image computing and computer-assisted intervention(MICCAI)",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/hecvl",
        "image": id_15,
        "arxiv": "https://arxiv.org/abs/2405.10075",
        "summary": "HECVL proposes a hierarchical video-language pretraining framework for zero-shot surgical phase recognition, enhancing surgical workflow analysis."
    },
    {
        "id": 16,
        "title": "Advancing surgical VQA with scene graph knowledge",
        "authors": "Kun Yuan, Manasi Kattel, Joel L Lavanchy, Nassir Navab, Vinkle Srivastav, Nicolas Padoy",
        "booktitle": "International journal of computer assisted radiology and surgery",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/SSG-VQA",
        "image": id_16,
        "arxiv": "https://arxiv.org/abs/2312.10251",
        "message": "Best paper award IPCAI 2024",
        "summary": "This paper advances surgical visual question answering (VQA) by incorporating scene graph knowledge, improving contextual understanding in surgical settings."
    },
    {
        "id": 17,
        "title": "Procedure-aware surgical video-language pretraining with hierarchical knowledge augmentation",
        "authors": "Kun Yuan, Vinkle Srivastav, Nassir Navab, Nicolas Padoy",
        "booktitle": "Advances in Neural Information Processing Systems",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/PeskaVLP",
        "image": id_17,
        "arxiv": "https://arxiv.org/abs/2410.00263",
        "message": "Spotlight NeurIPS 2024",
        "summary": "This work proposes PeskaVLP, a novel surgical video-language pretraining framework addressing the domain gap and data scarcity in surgical VLP. By leveraging large language models for hierarchical knowledge augmentation and combining visual self-supervision with a Dynamic Time Warping-based loss, PeskaVLP enhances cross-modal procedural alignment and reduces overfitting. Experiments on surgical datasets demonstrate its superior zero-shot transfer performance and generalist visual representations, advancing surgical scene understanding."
    },
    {
        "id": 18,
        "title": "Ophclip: Hierarchical retrieval-augmented learning for ophthalmic surgical video-language pretraining",
        "authors": "Ming Hu, Kun Yuan, Yaling Shen, Feilong Tang, Xiaohao Xu, Lin Zhou, Wei Li, Ying Chen, Zhongxing Xu, Zelin Peng, Siyuan Yan, Vinkle Srivastav, Diping Song, Tianbin Li, Danli Shi, Jin Ye, Nicolas Padoy, Nassir Navab, Junjun He",
        "booktitle": "arXiv preprint arXiv:2411.15421",
        "year": "2024",
        "github": "https://github.com/minghu0830/OphCLIP",
        "image": id_18,
        "arxiv": "https://arxiv.org/abs/2411.15421",
        "summary": "OphClip proposes a hierarchical retrieval-augmented learning framework for ophthalmic surgical video-language pretraining, enhancing surgical video analysis."
    },
    {
        "id": 19,
        "title": "Text-driven Adaptation of Foundation Models for Few-shot Surgical Workflow Analysis",
        "authors": "Tingxuan Chen, Kun Yuan, Vinkle Srivastav, Nassir Navab, Nicolas Padoy",
        "booktitle": "International journal of computer assisted radiology and surgery(IJCARS)",
        "year": "2025",
        "github": "https://github.com/CAMMA-public/Surg-FTDA",
        "image": id_19,
        "arxiv": "https://arxiv.org/abs/2501.09555",
        "summary": "This work introduces Surg-FTDA, a few-shot text-driven adaptation approach for surgical workflow analysis, reducing reliance on large annotated datasets. By aligning image embeddings with text embeddings and training a text-driven decoder, Surg-FTDA bridges the modality gap and enables tasks like image captioning, triplet recognition, and phase recognition without paired image-text data. Results demonstrate its superior performance and generalization across tasks, offering a scalable solution for surgical workflow analysis."
    },
    {
        "id": 20,
        "title": "When do they StOP?: A First Step Towards Automatically Identifying Team Communication in the Operating Room",
        "authors": "Keqi Chen, Lilien Schewski, Vinkle Srivastav,  Joel Lavanchy,  Didier Mutter,  Guido Beldi,  Sandra Keller,  Nicolas Padoy ",
        "booktitle": "International Conference on Information Processing in Computer-Assisted Interventions (IPCAI)",
        "year": "2025",
        "github": "https://github.com/CAMMA-public/Team-OR/",
        "image": id_20,
        "arxiv": "https://www.arxiv.org/abs/2502.08299",
        "summary": "This work introduces Team-OR, dataset with over 100 hours of multi-view surgical videos, temporally annotated for team communication briefings like Time-out and StOP?-protocol. The proposed group activity detection approach, combining scene context and action features, outperforms state-of-the-art methods, highlighting the importance of group activity analysis in the OR. This work advances computer-assisted surgical workflow analysis and intra-operative support systems, addressing a critical gap in OR team communication research."
    },
    {
        "id": 21,
        "title": "Multi-view Video-Pose Pretraining for Operating Room Surgical Activity Recognition",
        "authors": "Idris Hamoud, Vinkle Srivastav, Muhammad Abdullah Jamal, Didier Mutter, Omid Mohareri, Nicolas Padoy",
        "booktitle": "arXiv preprint arXiv:2502.13883",
        "year": "2025",
        "github": "https://github.com/CAMMA-public/PreViPS",
        "image": id_21,
        "arxiv": "https://arxiv.org/abs/2502.13883",
        "summary": "This work proposes PreViPS, a calibration-free multi-view multi-modal pretraining framework for surgical activity recognition, aligning 2D pose and vision embeddings across camera views. By introducing tokenized discrete pose embeddings and cross-modality geometric constraints, PreViPS enhances representation learning without requiring calibrated setups or advanced point-cloud processing. Experiments on OR datasets demonstrate its effectiveness in both multi-view and single-view settings, advancing surgical activity recognition in complex environments."
    },
    {
        "id": 22,
        "title": "Learning from Synchronization: Self-Supervised Uncalibrated Multi-View Person Association in Challenging Scenes",
        "authors": "Keqi Chen, Vinkle Srivastav, Didier MUTTER, Nicolas Padoy",
        "booktitle": "Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition",
        "year": "2025",
        "github": "https://github.com/CAMMA-public/Self-MVA",
        "image": id_22,
        "arxiv": "https://arxiv.org/",
        "message": "CVPR 2025",
        "youtube": "https://www.youtube.com",
        "youtube_message": "Demo video",
        "summary": "This paper introduces Self-MVA, a self-supervised method for multi-view person association without requiring annotations or calibrated cameras. It leverages cross-view image synchronization (determining if images are temporally aligned) to learn unified geometric and appearance features, combined with constraints like multi-view localization. Experiments on three benchmarks show it outperforms existing unsupervised and supervised approaches."
    }
]

export default ProjectsList
