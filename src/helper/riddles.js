const getRiddle = (userCTX, { id, addUserAnswer }) => {
  const defaultRiddle = {
    setup: { startCode: "" },
    check: { testFn: () => () => null },
  };

  // This is where the magic happens
  const allRiddle = {
    "1": {
      setup: {
        arg: { name: `${userCTX.userName}` },
        fnName: "greet",
        startCode: `
    function greet(person) {
      if (person.name == { name: "${userCTX.userName}" } ) {
        return "hey ${userCTX.userName}";
      } else {
        return "hey stranger";
      }
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === `hey ${userCTX.userName}`) {
            log("Yes");
            addUserAnswer(1);
          } else {
            error("No");
          }
        },
      },
    },
    "2": {
      setup: {
        arg: "let me out!",
        fnName: "textToBinary",
        startCode: `
    function textToBinary(string) {
  
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (
            result ===
            `1101100 1100101 1110100 100000 1101101 1100101 100000 1101111 1110101 1110100 100001`
          ) {
            log("Yes");
            addUserAnswer(2);
          } else {
            error("No");
          }
        },
      },
    },
    "3": {
      setup: {
        arg: "isThisUnique?",
        fnName: "uniqueCharacters",
        startCode: `
    function uniqueCharacters(word) {
  
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === false) {
            log("Yes");
            addUserAnswer();
          } else {
            error("No");
          }
        },
      },
    },
    "4": {
      setup: {
        arg:
          "epqqwdwuyku_vtqttjeqqivhyvl_ugwgtmkwguu_uk_gtvkhukgvedpmuqyupxpvvpuxkwptgjmdzuu_ljytuuuvtvxvuulip_qi_vlxqmg_ietpmlvxvvudipem_jldvmkglvliekdkjwkdlgjk_vxjykgulevgqmvqlfpteqglmvpullglipyhlljevvefwvjpviqulvieg_hulwqvyijkxdufuxflewkphmvkfijtltvwd_qitlv_ypqjytylwyzqdjpxlpvymldvipdmmtivqwiluumyfmmjyvveuvu_pykdgfkpydgkvtud_vvjgm_qjjmdgpwueldjpgvdxgqmtjdjjgmvwletgjiffkvvlpyydkyxvvvfijuguvpgx_vdgtpwvd_jpvklkvqjhylpmjtgtuylyfujdhkvmgh_ixfzwtpqltiffyvgutjji_gquilmytdqfy_xgxqqdpdtmzh_ywwimldxufxjpyxltjkegwgxtekpteekpulkugvmffgtutgivywuwqxeuvltvvpzfjmgtvvytpye_zgpvlgilvd_ixfiytkip_uvtppz_dw_vdpkufzdxul_vgfmgjviigtiyhljggvjqxzmqfpze_hqh_yugggilkuzgxhmeiliptexvvmhudlegmiffieuhyzd_m_qxkufvvxykddpxefim_gqpqivuxvtwuilwqvum_mgejjpymm_mqukgvumzmqfftmixtyumjfwgkvefuekwgjpjqge_tjtutzltiygikwiumvvgtlqgqqkkgegtuvfutgpvxgpzxp_vyjvwwfuvtvtwlgmvpxghgupxxgzyhhhhhuuihhhvujpihhhqykhhhhtivhhhdvxhhhhidhhhh_vthuyhqdduyiypiiiqlvgpvexhvguvvimsuelfhxiuipiveeixghgvjyfmhiiewpi_y_uihieduv_hfhetemipfg_pkfjpuwgquevhihzyuthuehuhfhuggzugh_zpgyhhhqtuuggguhudhhhqkpdhhgqvkeetzfpkj_fm_igw_letughudliu_htvzhiyvhvvhvghutimhtuhkhfdjzhudjwkhlh_gvzmthwiiqix_hggfuvtxlh_hlhxwhhhhvuttiiiyyhuuvuhihxftuhuhvqvuuuuhjlheiildutmqewvyjeukluuvglmplqdhuvtfuuddleuwttdl_litlzhtgffdllmyvtyl_dfwhtleiutiugjihfvhetgwttldvqqlhvlqmiiyqtkl_zg_f_wtlpytdqdpgdfvfewlljgvmgxyxpw_xiwxglieltdqgmtuuvvjmmuluuywmqqgkmmtgtflvl_lgktdkwp_fkxh_vfuufyfuufqhqxeixtlitiqgpguutvkuqtwyhxltfktlewmexlujgwyfgelxtfluugdlftutgvwlvvgyvtgjxlv_vvwftfuiu_xvvetuilmieh_ugjxpikilluudipuqxtvejutiiliuivge_fvjjuyqdkjiel_mkivuzzwxudjhvpmdivmttuktwqlevtel_u_hmzmxx_kd_vktmlhlz_fxwfdeqhfklzxiwmdlzfllxhhxkwehetilgkpxfpeevhl_whhethigteqdvvxhpi__ujh_yxigmfkumdwiyp_ktlvimfw_idfeiugjzxvquigdfxxjgqulfkgkkkhjuvlhtfg_itpumezqlhvyjymwgdeizigvglgguhk_wwdtyuuyvuplmgydw_xwg_fklgguiip_wlivjigdpwwxxuuvwkmmugfegituikhxqlvqthhjfjuhjwwhydfeythujtfqgqyjumcfpehjmcupvupliudlltuluvlpil__dxleavidldviuvjjjedkulaw_glilvuivmqllualvpgzjfquu_ve_mgfjutfvfiv_iuik_ldzukglilzfqjpljwiujwmlzyldi_tiqiufbdgmi_tvhiksyvmzdigwdldzfmekeemvthz_xz",
        fnName: "extractHint",
        startCode: `
    function extractHint(message) {
  
    }
    console.log(extraHint(message))
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === `uvlight`) {
            log("Yes");
            addUserAnswer();
          } else {
            error("No");
          }
        },
      },
    },
    "5": {
      setup: {
        arg: ["A8", "B8"],
        fnName: "canCapture",
        startCode: `
    function canCapture([yourShip, opponentsShip]) {
  
    }
          `,
      },
      check: {
        testFn: (log, error) => (result) => {
          if (result === true) {
            log("Yes");
            addUserAnswer();
          } else {
            error("No");
          }
        },
      },
    },
  };

  return allRiddle[id] || defaultRiddle;
};

export default getRiddle;
