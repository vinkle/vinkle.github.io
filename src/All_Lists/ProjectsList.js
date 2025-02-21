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
import id_11 from "../assets/projects/id_11.png";
import id_12 from "../assets/projects/id_12.png";
import id_13 from "../assets/projects/id_13.png";
import id_14 from "../assets/projects/id_14.png";
import id_15 from "../assets/projects/id_15.png";
import id_16 from "../assets/projects/id_16.png";
import id_17 from "../assets/projects/id_17.png";
import id_18 from "../assets/projects/id_18.png";   
import id_19 from "../assets/projects/id_19.png";   
import id_20 from "../assets/projects/id_20.png";   
import id_21 from "../assets/projects/id_21.png";   

const ProjectsList = [
    {
        "id": 1,
        "title": "Free-access open-source e-learning in comprehensive neurosurgery skills training",
        "authors": "Payal Jotwani, Vinkle Srivastav, Manjul Tripathi, Rama Chandra Deo, Britty Baby, Natesan Damodaran, Ramandeep Singh, Ashish Suri, Martin Bettag, Tara Sankar Roy, others",
        "booktitle": "Neurology India",
        "year": "2014",
        "github": "https://github.com/vinkle",
        "image": id_1,
        "arxiv": "https://www.researchgate.net/publication/265859540_Free-access_open-source_e-learning_in_comprehensive_neurosurgery_skills_training"   
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
        "message": "First human pose estimation dataset recoreded from the real clinical interventions"
    },
    {
        "id": 3,
        "title": "Face detection in the operating room: Comparison of state-of-the-art methods and a self-supervised approach",
        "authors": "Thibaut Issenhuth, Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "IJCARS",
        "year": "2019",
        "github": "https://github.com/CAMMA-public",
        "image": id_3,
        "arxiv": "https://arxiv.org/abs/1811.12296",
        "message": "Runner-up award in the bench-to-bedside category"
    },
    {
        "id": 4,
        "title": "Human pose estimation on privacy-preserving low-resolution depth images",
        "authors": "Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "MICCAI",
        "year": "2019",
        "github": "https://github.com/CAMMA-public/ORPose-Depth",
        "image": id_4,
        "arxiv": "https://arxiv.org/abs/2007.08340"   
    },
    {
        "id": 5,
        "title": "Self-supervision on unlabelled or data for multi-person 2d/3d human pose estimation",
        "authors": "Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "MICCAI",
        "year": "2020",
        "github": "https://github.com/CAMMA-public/ORPose-Color",
        "image": id_5,
        "arxiv": "https://arxiv.org/abs/2007.08354",
        "message": "Oral presentation at MICCAI 2020"
    },
    {
        "id": 6,
        "title": "Neural and Deep Neural Networks Learning",
        "authors": "Deepak Alapatt, Pietro Mascagni, Vinkle Srivastav, Nicolas Padoy",
        "booktitle": "Artificial Intelligence in Surgery: Understanding the Role of AI in Surgical Practice",
        "year": "2021",
        "github": "https://github.com/CAMMA-public/ai4surgery",
        "image": id_6,
        "arxiv": "https://arxiv.org/pdf/2009.13411"   
    },
    {
        "id": 7,
        "title": "Neurosurgery apps: novel knowledge boosters",
        "authors": "Manjul Tripathi, Rama Chandra Deo, Vinkle Srivastav, BABY Britty, Ramandeep Singh, Natesan Damodaran, SURI Ashish",
        "booktitle": "Turkish Neurosurgery",
        "year": "2014",
        "github": "https://github.com/vinkle/Neurosurgery-Apps",
        "image": id_7,
        "arxiv": "https://pubmed.ncbi.nlm.nih.gov/25448196/"   
    },
    {
        "id": 8,
        "title": "Dissecting self-supervised learning methods for surgical computer vision",
        "authors": "Sanat Ramesh, Vinkle Srivastav, Deepak Alapatt, Tong Yu, Aditya Murali, Luca Sestini, Chinedu Innocent Nwoye, Idris Hamoud, Saurav Sharma, Antoine Fleurentin, others",
        "booktitle": "Medical Image Analysis",
        "year": "2023",
        "github": "https://github.com/CAMMA-public/SelfSupSurg",
        "image": id_8,
        "arxiv": "https://arxiv.org/abs/2207.00449"   
    },
    {
        "id": 9,
        "title": "Unsupervised domain adaptation for clinician pose estimation and instance segmentation in the operating room",
        "authors": "Vinkle Srivastav, Afshin Gangi, Nicolas Padoy",
        "booktitle": "Medical Image Analysis",
        "year": "2022",
        "github": "https://github.com/CAMMA-public/HPE-AdaptOR",
        "image": id_9,
        "arxiv": "https://arxiv.org/abs/2108.11801"   
    },
    {
        "id": 10,
        "title": "ST(OR)2 : Spatio-temporal object level reasoning for activity recognition in the operating room",
        "authors": "Idris Hamoud, Muhammad Abdullah Jamal, Vinkle Srivastav, Didier Mutter, Nicolas Padoy, Omid Mohareri",
        "booktitle": "Medical imaging with deep learning",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/SROR2",
        "image": id_10,
        "arxiv": "https://arxiv.org/abs/2312.12250"   
    },
    {
        "id": 11,
        "title": "Learning multi-modal representations by watching hundreds of surgical video lectures",
        "authors": "Kun Yuan, Vinkle Srivastav, Tong Yu, Joel L Lavanchy, Pietro Mascagni, Nassir Navab, Nicolas Padoy",
        "booktitle": "arXiv:2307.15220",
        "year": "2023",
        "github": "https://github.com/CAMMA-public/SurgVLP",
        "image": id_11,
        "arxiv": "https://arxiv.org/abs/2307.15220"   
    },
    {
        "id": 12,
        "title": "Jumpstarting Surgical Computer Vision",
        "authors": "Deepak Alapatt, Aditya Murali, Vinkle Srivastav, AI4SafeChole Consortium, Pietro Mascagni, Nicolas Padoy",
        "booktitle": "MICCAI",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/ScalingSurgicalSSL",
        "image": id_12,
        "arxiv": "https://arxiv.org/abs/2312.05968"   
    },
    {
        "id": 13,
        "title": "Overcoming Dimensional Collapse in Self-supervised Contrastive Learning for Medical Image Segmentation",
        "authors": "Jamshid Hassanpour, Vinkle Srivastav, Didier Mutter, Nicolas Padoy",
        "booktitle": "ISBI, Athens, 2024",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/med-moco",
        "image": id_13,
        "arxiv": "https://arxiv.org/abs/2402.14611"   
    },
    {
        "id": 14,
        "title": "SelfPose3d: Self-supervised Multi-person Multi-view 3d Pose Estimation",
        "authors": "Vinkle Srivastav, Keqi Chen, Nicolas Padoy",
        "booktitle": "CVPR",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/SelfPose3d",
        "image": id_14,
        "arxiv": "https://arxiv.org/abs/2404.02041",
        "message": "Poster presentation at CVPR 2024"
    },
    {
        "id": 15,
        "title": "HECVL: Hierarchical video-language pretraining for zero-shot surgical phase recognition",
        "authors": "Kun Yuan, Vinkle Srivastav, Nassir Navab, Nicolas Padoy",
        "booktitle": "MICCAI",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/hecvl",
        "image": id_15,
        "arxiv": "https://arxiv.org/abs/2405.10075"   
    },
    {
        "id": 16,
        "title": "Advancing surgical VQA with scene graph knowledge",
        "authors": "Kun Yuan, Manasi Kattel, Joel L Lavanchy, Nassir Navab, Vinkle Srivastav, Nicolas Padoy",
        "booktitle": "IJCARS",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/SSG-VQA",
        "image": id_16,
        "arxiv": "https://arxiv.org/abs/2312.10251",
        "message": "Best paper award IPCAI 2024"   
    },
    {
        "id": 17,
        "title": "Procedure-aware surgical video-language pretraining with hierarchical knowledge augmentation",
        "authors": "Kun Yuan, Vinkle Srivastav, Nassir Navab, Nicolas Padoy",
        "booktitle": "NeurIPS",
        "year": "2024",
        "github": "https://github.com/CAMMA-public/PeskaVLP",
        "image": id_17,
        "arxiv": "https://arxiv.org/abs/2410.00263",
        "message": "Spotlight NeurIPS 2024"
    },
    {
        "id": 18,
        "title": "Ophclip: Hierarchical retrieval-augmented learning for ophthalmic surgical video-language pretraining",
        "authors": "Ming Hu, Kun Yuan, Yaling Shen, Feilong Tang, Xiaohao Xu, Lin Zhou, Wei Li, Ying Chen, Zhongxing Xu, Zelin Peng, Siyuan Yan, Vinkle Srivastav, Diping Song, Tianbin Li, Danli Shi, Jin Ye, Nicolas Padoy, Nassir Navab, Junjun He",
        "booktitle": "arXiv preprint arXiv:2411.15421",
        "year": "2024",
        "github": "https://github.com/minghu0830/OphCLIP",
        "image": id_18,
        "arxiv": "https://arxiv.org/abs/2411.15421"   
    },
    {
        "id": 19,
        "title": "Text-driven Adaptation of Foundation Models for Few-shot Surgical Workflow Analysis",
        "authors": "Tingxuan Chen, Kun Yuan, Vinkle Srivastav, Nassir Navab, Nicolas Padoy",
        "booktitle": "IPCAI",
        "year": "2025",
        "github": "https://github.com/CAMMA-public/Surg-FTDA",
        "image": id_19,
        "arxiv": "https://arxiv.org/abs/2501.09555"   
    },
    {
        "id": 20,
        "title": "When do they StOP?: A First Step Towards Automatically Identifying Team Communication in the Operating Room",
        "authors": "Keqi Chen, Lilien Schewski, Vinkle Srivastav,  Joel Lavanchy,  Didier Mutter,  Guido Beldi,  Sandra Keller,  Nicolas Padoy ",
        "booktitle": "IPCAI",
        "year": "2025",
        "github": "https://github.com/CAMMA-public/Team-OR/",
        "image": id_20,
        "arxiv": "https://www.arxiv.org/abs/2502.08299"   
    },
    {
        "id": 21,
        "title": "Multi-view Video-Pose Pretraining for Operating Room Surgical Activity Recognition",
        "authors": "Idris Hamoud, Vinkle Srivastav, Muhammad Abdullah Jamal, Didier Mutter, Omid Mohareri, Nicolas Padoy",
        "booktitle": "arXiv preprint arXiv:2502.13883",
        "year": "2025",
        "github": "https://github.com/CAMMA-public/PreViPS",
        "image": id_21,
        "arxiv": "https://arxiv.org/abs/2502.13883"   
    }
]

export default ProjectsList