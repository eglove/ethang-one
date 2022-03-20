import { StaticBlogLayout } from '../../components/blog/blog/static-blog-layout';
import { LinkComponent } from '../../components/common/link-component/link-component';
import { getBlog } from '../../util/next-properties';
import { BlogProperties } from '../../util/query';

function PcBackupInTwoLines({ blog }: BlogProperties): JSX.Element {
  return (
    <StaticBlogLayout blog={blog}>
      <p>
        I backed up my entire PC setup with two lines of PowerShell code that I
        store on a USB.
        <p>
          <code>
            Start-BitsTransfer -Source
            https://raw.githubusercontent.com/eglove/PSScripts/master/pcSetup.ps1
            -Destination script.ps1
          </code>
        </p>
        <p>
          <code>Invoke-Expression&lsquo;.\script.ps1&rsquo;</code>
        </p>
      </p>
      <p>
        Maybe not exactly two lines of code. Maybe it&apos;s two lines to
        download the actual script which happens to be around 144 lines. I
        wouldn&apos;t want to store that on a USB for obvious reasons. If I
        update it, it&apos;s not up to date on the USB. And I&apos;m definitely
        not going to bother to update it in two places.
      </p>
      <p>
        So what exactly does the{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/master/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1',
          }}
        >
          actual script
        </LinkComponent>{' '}
        do? Well, the first step is the most important step and the one that
        made me realize I could write this script, to begin with. It installs{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L46',
          }}
        >
          Chocolatey Pro
        </LinkComponent>{' '}
        including copying over the license file that&apos;s also kept on the
        same USB.
      </p>
      <p>
        Second, while I&apos;m there, I may as well{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L54',
          }}
        >
          set up WSL 2 and Ubuntu
        </LinkComponent>
        . The tricky part I realized during the process of writing this is that
        even though chocolatey adds its own environment variables, as well as
        the variables of the software it will later install, that&apos;s not
        available in the current session of PowerShell. This also means the
        choco command isn&apos;t available in that current session.
      </p>
      <p>
        So, after downloading and installing WSL I had to open up a new
        PowerShell window, install it via Chocolatey, then start Ubuntu so that
        I could set up a new user. Every subsequent choco or GitHub CLI command
        had to be run in its own PowerShell instance.
      </p>
      <p>
        With that done, it&apos;s just a matter of{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L69',
          }}
        >
          installing all the software I have listed in an array
        </LinkComponent>{' '}
        via Chocolatey. As well as any PowerShell modules I use, and yarn global
        installs.
      </p>
      <p>
        And I couldn&apos;t forget to{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L85',
          }}
        >
          download, install, and set an environment variable for all my other
          scripts
        </LinkComponent>
        . But I couldn&apos;t just download them. I had to git clone them. Via
        the GitHub client. This means I had to install gh cli and authenticate
        it before moving on. This sets me up for GitHub commands in the future.
      </p>
      <p>
        But why stop there? Cortana is still active. My toolbar isn&apos;t set
        up as I like it. That can all be done by changing Registry settings.
        Which can be set via PowerShell. So I{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L98',
          }}
        >
          applied any Windows settings
        </LinkComponent>{' '}
        I wanted to save.
      </p>
      <p>
        And while I have a script to update software, I allow the JetBrains
        toolbox to handle IDE updates and generate shell scripts. So I{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L109',
          }}
        >
          updated those settings
        </LinkComponent>{' '}
        as well as the theme and any other settings I have set on IntelliJ. And
        settings for terminus, can&apos;t forget to backup my{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L115',
          }}
        >
          terminus settings
        </LinkComponent>
        .
      </p>
      <p>
        All wrapping up in a{' '}
        <LinkComponent
          linkProperties={{
            href: 'https://github.com/eglove/ethang-one/blob/68a44f7ab7e4abd912a50ad56fee3bfd9d604622/apps/computer-cli/src/app/commands/powershell-scripts/pcSetup.ps1#L120',
          }}
        >
          clean up process
        </LinkComponent>{' '}
        by doing an initial windows update for the clean install, removing any
        desktop shortcuts generated by the choco installs, running cleanmgr to
        allow a safe delete of Windows.old and deleting the downloads for WSL
        and the initial script off the USB.
      </p>
      <p>
        I love this little script. Everything backed up in just the way I want
        it, ready for a fresh Windows install at any time. I honestly wish I had
        an excuse to run it more often.
      </p>
    </StaticBlogLayout>
  );
}

export default PcBackupInTwoLines;

// eslint-disable-next-line unicorn/prevent-abbreviations
export async function getServerSideProps(): Promise<{
  props: BlogProperties;
}> {
  return getBlog('pc-backup-in-two-lines');
}
