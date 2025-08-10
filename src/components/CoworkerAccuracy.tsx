"use client";
import styles from "./Comparison.module.css";

export default function CoworkerAccuracy() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>How accurate is accurate?</h1>
          <p className={styles.heroSubtitle}>
            A clear, side-by-side highlight of what our AI and expert lawyers
            identify in the same clause — powered by the{" "}
            <a
              href="https://www.atticusprojectai.org/cuad"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              CUAD dataset
            </a>
          </p>
          <div className={styles.documentInfo}>
            <div className={styles.docCard}>
              <h3>Document Analyzed</h3>
              <p>
                DovaPharmaceuticalsInc_20181108_10-Q_EX-10.2_11414857_EX-10.2_Promotion
                Agreement
              </p>
            </div>
            <div className={styles.docCard}>
              <h3>Question</h3>
              <p>
                Highlight the parts (if any) related to Anti-Assignment that
                should be reviewed by a lawyer. Is consent or notice required if
                the contract is assigned to a third party?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Central Clause with Highlights */}
      <section className={styles.clauseSection}>
        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={`${styles.legendSwatch} ${styles.hlAISwatch}`}></span>
            <span className={styles.legendLabel}>AI</span>
          </div>
          <div className={styles.legendItem}>
            <span
              className={`${styles.legendSwatch} ${styles.hlLawyerSwatch}`}
            ></span>
            <span className={styles.legendLabel}>Lawyer</span>
          </div>
          <div className={styles.legendItem}>
            <span className={`${styles.legendSwatch} ${styles.hlBothSwatch}`}></span>
            <span className={styles.legendLabel}>Both</span>
          </div>
        </div>

        <div className={styles.clauseBox}>
          <h2 className={styles.sectionTitle}>Section 13.2 — Assignment</h2>
          <p className={styles.clauseText}>
            13.2 Assignment. <span className={styles.hlBoth}>Except as provided
            in this Section 13.2, this Agreement may not be assigned or otherwise
            transferred, nor may any rights or obligations hereunder be assigned
            or transferred, by either Party, without the written consent of the
            other Party (such consent not to be unreasonably withheld); provided
            that a merger, sale of stock or comparable transaction shall not
            constitute an assignment.</span> <span className={styles.hlBoth}>In
            the event either Party desires to make such an assignment or other
            transfer of this Agreement or any rights or obligations hereunder,
            such Party shall deliver a written notice to the other Party
            requesting the other Party’s written consent in accordance with this
            Section 13.2, and the other Party shall provide such Party written
            notice of its determination whether to provide such written consent
            within [***] following its receipt of such written notice from such
            Party.</span> Notwithstanding the foregoing, <span
              className={styles.hlAI}
            >(a) either Party may, without the other Party’s consent, assign this
            Agreement and its rights and obligations hereunder in whole or in
            part to an Affiliate; and (b) Dova may assign this Agreement to a
            successor in interest in connection with the sale or other transfer
            of all or substantially all of Dova’s assets or rights relating to
            the Product; provided that such assignee shall remain subject to all
            of the terms and conditions hereof in all respects and shall assume
            all obligations </span> of Dova hereunder whether accruing before or
            after such assignment. Any permitted assignee shall assume all
            assigned obligations of its assignor under this Agreement. <span
              className={styles.hlBoth}
            > Any attempted assignment not in accordance with this Section 13.2
            shall be void.</span> This Agreement shall be binding on, and inure
            to the benefit of, each Party, and its permitted successors and
            assigns.
          </p>
        </div>
      </section>

      {/* Other Clauses Flagged */}
      <section className={styles.otherSection}>
        <h3 className={styles.otherTitle}>Other clauses flagged</h3>
        <ul className={styles.otherList}>
          <li className={styles.otherItem}>
            <span className={`${styles.tag} ${styles.tagBoth}`}>Both</span>
            <span className={styles.otherText}>
              “Except to Affiliates of Valeant, Valeant shall not subcontract the
              Valeant Activities with any Third Party….”
            </span>
          </li>
          <li className={styles.otherItem}>
            <span className={`${styles.tag} ${styles.tagAI}`}>AI</span>
            <span className={styles.otherText}>
              “Except to Affiliates of Valeant, Valeant’s rights and obligations
              … are non-transferable, non-assignable, and non-delegable.”
            </span>
          </li>
          <li className={styles.otherItem}>
            <span className={`${styles.tag} ${styles.tagAI}`}>AI</span>
            <span className={styles.otherText}>
              “All notices which are required or permitted hereunder shall be in
              writing and sufficient if delivered personally, sent by e-mail
              (with prompt hard-copy confirmation), overnight courier, or
              registered/certified mail….”
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}


