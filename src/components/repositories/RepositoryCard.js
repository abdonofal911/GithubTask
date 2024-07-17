import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {fontScale, scale, vScale} from '../../themes/Scale';
import Colors from '../../themes/Colors';
import Font from '../../themes/Font';

/*
     "allow_forking":true,
      "archive_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/{archive_format}{/ref}",
      "archived":true,
      "assignees_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/assignees{/user}",
      "blobs_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/git/blobs{/sha}",
      "branches_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/branches{/branch}",
      "clone_url":"https://github.com/Tokyo-Metro-Gov/covid19.git",
      "collaborators_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/collaborators{/collaborator}",
      "comments_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/comments{/number}",
      "commits_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/commits{/sha}",
      "compare_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/compare/{base}...{head}",
      "contents_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/contents/{+path}",
      "contributors_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/contributors",
      "created_at":"2020-02-29T02:57:45Z",
      "default_branch":"development",
      "deployments_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/deployments",
      "description":"東京都 新型コロナウイルス感染症対策サイト / Tokyo COVID-19 Task Force website",
      "disabled":false,
      "downloads_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/downloads",
      "events_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/events",
      "fork":false,
      "forks":2025,
      "forks_count":2025,
      "forks_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/forks",
      "full_name":"Tokyo-Metro-Gov/covid19",
      "git_commits_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/git/commits{/sha}",
      "git_refs_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/git/refs{/sha}",
      "git_tags_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/git/tags{/sha}",
      "git_url":"git://github.com/Tokyo-Metro-Gov/covid19.git",
      "has_discussions":false,
      "has_downloads":true,
      "has_issues":true,
      "has_pages":false,
      "has_projects":true,
      "has_wiki":false,
      "homepage":"https://stopcovid19.metro.tokyo.lg.jp/",
      "hooks_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/hooks",
      "html_url":"https://github.com/Tokyo-Metro-Gov/covid19",
      "id":243894277,
      "is_template":false,
      "issue_comment_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/issues/comments{/number}",
      "issue_events_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/issues/events{/number}",
      "issues_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/issues{/number}",
      "keys_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/keys{/key_id}",
      "labels_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/labels{/name}",
      "language":"Vue",
      "languages_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/languages",
      "license":{
         "key":"mit",
         "name":"MIT License",
         "node_id":"MDc6TGljZW5zZTEz",
         "spdx_id":"MIT",
         "url":"https://api.github.com/licenses/mit"
      },
      "merges_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/merges",
      "milestones_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/milestones{/number}",
      "mirror_url":null,
      "name":"covid19",
      "node_id":"MDEwOlJlcG9zaXRvcnkyNDM4OTQyNzc=",
      "notifications_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/notifications{?since,all,participating}",
      "open_issues":45,
      "open_issues_count":45,
      "owner":{
         "avatar_url":"https://avatars.githubusercontent.com/u/91878926?v=4",
         "events_url":"https://api.github.com/users/Tokyo-Metro-Gov/events{/privacy}",
         "followers_url":"https://api.github.com/users/Tokyo-Metro-Gov/followers",
         "following_url":"https://api.github.com/users/Tokyo-Metro-Gov/following{/other_user}",
         "gists_url":"https://api.github.com/users/Tokyo-Metro-Gov/gists{/gist_id}",
         "gravatar_id":"",
         "html_url":"https://github.com/Tokyo-Metro-Gov",
         "id":91878926,
         "login":"Tokyo-Metro-Gov",
         "node_id":"O_kgDOBXn2Dg",
         "organizations_url":"https://api.github.com/users/Tokyo-Metro-Gov/orgs",
         "received_events_url":"https://api.github.com/users/Tokyo-Metro-Gov/received_events",
         "repos_url":"https://api.github.com/users/Tokyo-Metro-Gov/repos",
         "site_admin":false,
         "starred_url":"https://api.github.com/users/Tokyo-Metro-Gov/starred{/owner}{/repo}",
         "subscriptions_url":"https://api.github.com/users/Tokyo-Metro-Gov/subscriptions",
         "type":"Organization",
         "url":"https://api.github.com/users/Tokyo-Metro-Gov"
      },
      "private":false,
      "pulls_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/pulls{/number}",
      "pushed_at":"2023-06-01T02:34:24Z",
      "releases_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/releases{/id}",
      "score":1,
      "size":6737424,
      "ssh_url":"git@github.com:Tokyo-Metro-Gov/covid19.git",
      "stargazers_count":6291,
      "stargazers_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/stargazers",
      "statuses_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/statuses/{sha}",
      "subscribers_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/subscribers",
      "subscription_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/subscription",
      "svn_url":"https://github.com/Tokyo-Metro-Gov/covid19",
      "tags_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/tags",
      "teams_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/teams",
      "topics":[
         "covid-19"
      ],
      "trees_url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19/git/trees{/sha}",
      "updated_at":"2023-11-08T01:29:46Z",
      "url":"https://api.github.com/repos/Tokyo-Metro-Gov/covid19",
      "visibility":"public",
      "watchers":6291,
      "watchers_count":6291,
      "web_commit_signoff_required":false
   },
      */
const RepositoryCard = ({item, isDark}) => {
  return (
    <View>
      <View style={isDark ? styles.containerDark : styles.container}>
        <View>
          <View style={styles.titleRow}>
            <AntDesign name="book" size={16} color={Colors.green2} />
            <Text style={isDark ? styles.titleTextDark : styles.titleText}>
              {item.full_name}
            </Text>
          </View>
          <View
            style={{
              borderBottomColor: Colors.label,
              borderBottomWidth: StyleSheet.hairlineWidth,
              paddingBottom: vScale(20),
            }}>
            <Text style={isDark ? styles.descriptionDark : styles.description}>
              {item.description}
            </Text>
          </View>
          <View style={styles.footerContainer}>
            {/* <Text style={styles.footerText}>Updated 12 hours ago</Text> */}
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              {item.language}
            </Text>
            <AntDesign name="staro" size={12} color={Colors.green2} />
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              {item.stargazers_count}
            </Text>
            <AntDesign name="fork" size={12} color={Colors.green2} />
            <Text style={isDark ? styles.footerTextDark : styles.footerText}>
              {item.forks_count}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RepositoryCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    width: scale(358),
    borderRadius: vScale(6),
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
    paddingHorizontal: scale(22),
    paddingBottom: vScale(23),
    paddingTop: vScale(18),
  },
  containerDark: {
    backgroundColor: Colors.black,
    width: scale(358),
    borderRadius: vScale(6),
    shadowColor: Colors.darkWhite,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
    paddingHorizontal: scale(22),
    paddingBottom: vScale(23),
    paddingTop: vScale(18),
  },
  banner: {
    height: vScale(163),
    width: scale(358),
    borderRadius: vScale(6),
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tending: {
    fontFamily: Font.Regular,
    fontSize: fontScale(12),
    color: Colors.label,
    textAlign: 'center',
  },
  starText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.black,
    marginHorizontal: scale(10),
  },
  starRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countStarText: {
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
    color: Colors.mainColor,
    textAlign: 'center',
    backgroundColor: Colors.lightGreen,
    paddingHorizontal: scale(6),
    paddingVertical: scale(4),
    borderRadius: vScale(8),
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: vScale(15),
  },
  titleText: {
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    color: Colors.mainColor,
    marginStart: scale(13),
  },
  titleTextDark: {
    fontFamily: Font.Medium,
    fontSize: fontScale(18),
    color: Colors.White,
    marginStart: scale(13),
  },
  description: {
    color: Colors.black,
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
  },
  descriptionDark: {
    color: Colors.White,
    fontFamily: Font.Regular,
    fontSize: fontScale(14),
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: scale(20),
  },

  footerText: {
    fontSize: fontScale(12),
    color: Colors.black,
    fontFamily: Font.Regular,
    paddingEnd: scale(44),
    paddingStart: scale(4),
  },
  footerTextDark: {
    fontSize: fontScale(12),
    color: Colors.White,
    fontFamily: Font.Regular,
    paddingEnd: scale(44),
    paddingStart: scale(4),
  },
});
