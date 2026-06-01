const portfolioData = {
    // 個人基本資訊
    profile: {
        name: "MRSogzz",
        title: "AI & 量化金融工程師 (AI & Quantitative Engineer)",
        tagline: "專注於深度強化學習與量化投資，建構兼具高模組化架構與高擬真回測之自動化交易系統；同時深耕生成式 AI 地端優化，打造流暢的本地化推論環境。",
        email: "MRSogzz@gmail.com",
        github: "https://github.com/MRSogzz",
        resumeUrl: "assets/Resume_MRSogzz.pdf" // 您的 PDF 履歷路徑
    },
    
    // 專業核心技能
    skills: [
        {
            title: "人工智慧與生成式 AI",
            icon: "sparkles",
            description: "PyTorch, Generative AI (Diffusion Models, Wan2.1), ControlNet, ComfyUI 自訂節點開發, 電腦視覺 (CV)"
        },
        {
            title: "自然語言處理 & 部署",
            icon: "terminal",
            description: "Transformers, LLM 離線推論架構, 模型量化 (4-bit/8-bit 量化, FP16), 記憶體映射 (Memory Mapping), 效能優化"
        },
        {
            title: "強化學習 & 量化投資",
            icon: "brain",
            description: "Deep Reinforcement Learning (DRL), Soft Actor-Critic (SAC), PPO, 馬可夫決策過程 (MDP), 連續動作空間優化"
        },
        {
            title: "資料科學 & 金融研究",
            icon: "bar-chart-3",
            description: "Python, NumPy, Pandas, Scikit-learn, 多因子特徵工程 (Alpha Factors), 嚴格交易成本與滑點回測框架"
        }
    ],

    // 精選專案作品
    projects: [
        {
            id: "wanposenodes",
            title: "WanPoseNodes",
            githubUrl: "https://github.com/MRSogzz/WanPoseNodes",
            techStack: "PyTorch, ComfyUI, Custom Node, Computer Vision",
            bulletPoints: [
                "針對最新開源影片生成大模型 <span class='text-indigo-300 font-medium'>Wan2.1</span> 開發專屬的 ComfyUI 自訂姿勢控制（Pose Control）節點，完善 AIGC 工作流生態系。",
                "深入優化多模態模型的記憶體動態分配機制，有效降低地端 GPU <span class='text-indigo-300 font-medium'>VRAM 開銷</span>，顯著減少長影片生成時的記憶體溢出（OOM）崩潰。",
                "設計高精度的序列控制接口，確保生成影片在幀與幀（Frame-by-frame）之間保持優異的姿態一致性與時間軸穩定度。"
            ],
            // Demo 展示區設定
            demo: {
                sourceImg: "assets/wan-source.png",
                resultVideo: "assets/wan-result.mp4",
                caption: "實際運行效果：左側輸入 768×1024 原圖，右側為 Wan2.1 I2V 高擬真直向影片生成結果"
            }
        },
        {
            id: "offline-translation",
            title: "Offline_translation",
            githubUrl: "https://github.com/MRSogzz/Offline_translation",
            techStack: "NLP, Transformers, Model Quantization, Local Deployment",
            bulletPoints: [
                "基於 Transformer 架構打造隱私安全、無網路依賴的<span class='text-indigo-300 font-medium'>地端離線翻譯系統</span>，專為高敏感度數據環境設計。",
                "整合先進的模型量化技術（包含 <span class='text-indigo-300 font-medium'>4-bit/8-bit 精簡優化</span>），在維持高度翻譯藍色評分（BLEU Score）的前題下，將模型體積壓縮逾 60%。",
                "導入高效能記憶體映射（Memory-mapping）與快取技術，成功在消費級與低算力邊緣設備上實現高吞吐量、<span class='text-indigo-300 font-medium'>低延遲（Low-latency）</span>的即時雙向翻譯。"
            ],
            demo: null
        },
        {
            id: "sac-stock",
            title: "SAC-Stock",
            githubUrl: "https://github.com/MRSogzz/SAC-Stock",
            techStack: "Deep Reinforcement Learning, Soft Actor-Critic, Quantitative Trading",
            bulletPoints: [
                "將股票市場動態與資產配置問題建模為<span class='text-indigo-300 font-medium'>馬可夫決策過程 (MDP)</span>，利用深度強化學習（DRL）進行自動化量化交易決策。",
                "採用 <span class='text-indigo-300 font-medium'>Soft Actor-Critic (SAC) 演算法</span>，充分利用其最大熵（Maximum Entropy）框架，解決高維度與連續動作空間（Continuous Action Space）下的投資組合優化挑戰。",
                "優化獎勵函數（Reward Function）設計，將風險調整後收益（如夏普比率 Sharpe Ratio）納入考量，引導 Agent 在波動市場中尋找最佳風險收益平衡點。"
            ],
            demo: null
        },
        {
            id: "sac-stock-research",
            title: "SAC-stock-research",
            githubUrl: "https://github.com/MRSogzz/SAC-stock-research",
            techStack: "Time-Series, Feature Engineering, Backtesting, Alpha Research",
            bulletPoints: [
                "針對強化學習量化模型進行嚴格的<span class='text-indigo-300 font-medium'>金融時間序列研究與市場微觀結構分析</span>，致力於提升模型在非線性市場中的泛化能力。",
                "建構完整的多因子特徵工程（Alpha Factors Pipeline），導入動量、波動度及技術指標，大幅提升強化學習環境的狀態表徵（State Representation）品質。",
                "開發<span class='text-indigo-300 font-medium'>高擬真回測框架</span>，嚴格納入交易成本、市場滑點（Slippage）以及借貸利息，有效對抗過擬合（Overfitting），確保策略具備極高實盤可行性。"
            ],
            demo: null
        }
    ],

    // 職涯與研究經歷
    experience: [
        {
            period: "",
            role: "",
            company: "",
            description: ""
        }
    ]
};